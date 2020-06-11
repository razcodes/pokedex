import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  currentPokemon; 

  constructor(private service: PokedexService){}

  onPokemonSelected(pokemon){
    this.currentPokemon = pokemon;
  }

}
