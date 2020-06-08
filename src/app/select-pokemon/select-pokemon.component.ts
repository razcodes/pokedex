import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
  myForm: FormGroup;
  currentPokemon;
  pokemons;
  
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
          this.pokemons = res["results"]
        })
  }
  
  setCurrentPokemon(pokemonUrl){
    this.service.setCurrentPokemonByUrl(pokemonUrl)
      .then(res => this.currentPokemon = res)
  }

  getCurrentPokemon(){
    this.service.getCurrentPokemon();
  }

}
