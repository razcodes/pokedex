import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
  @Output() change = new EventEmitter();
  myForm: FormGroup;
  pokemons;
  currentPokemon;
  
  constructor(private fb: FormBuilder, private service: PokedexService){}

  ngOnInit(){
    this.getAllPokemons();
    this.myForm = this.fb.group({
      currentPokemon: this.getCurrentPokemon()
    })
  }

  getAllPokemons(){
    this.service.getAll()
    .then(
      res => {
        this.pokemons = res["results"];
        this.change.emit(this.currentPokemon);
      })
  }
  
  setCurrentPokemon(pokemonUrl){
    this.service.setCurrentPokemonByUrl(pokemonUrl)
    .then(res => {
      this.currentPokemon = res;
      this.change.emit(this.currentPokemon);
    })
  }

  getCurrentPokemon(){
    this.service.getCurrentPokemon();
    this.change.emit(this.currentPokemon);
  }

}
