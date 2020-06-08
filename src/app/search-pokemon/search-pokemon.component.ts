import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {
  myForm: FormGroup;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  currentPokemon;
  pokemons;

  constructor(private fb: FormBuilder, private service: PokedexService) { }

  ngOnInit() {
    this.getAll();
    this.myForm = this.fb.group({
      currentPokemon: this.getCurrentPokemon()
    })
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  
  getAll(){
    this.service.getAll()
    .then(res => {
      this.pokemons = res["results"]
      for(let p of this.pokemons){
        this.options.push(this._toTitleCase(p.name));
      }
    });
  }
  
  getCurrentPokemon(){
    this.service.getCurrentPokemon();
  }

  setCurrentPokemonByName(pokemon){
    this.service.setCurrentPokemonByName(pokemon)
      .then(res => this.currentPokemon = res)
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _toTitleCase(str){
      return str[0].toUpperCase()+str.substring(1, str.length);
  }
}
