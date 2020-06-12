import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  currentPokemon;

  constructor(private service: PokedexService){
  }

  onPokemonChange(pokemon){
    this.currentPokemon = pokemon;
  }


  isValid(x){
    if(x == null){
      console.log("null")
      return false
    }
    if(x == undefined){
      console.log("undefined")
      return false;
    }

    return true;
  }

}
