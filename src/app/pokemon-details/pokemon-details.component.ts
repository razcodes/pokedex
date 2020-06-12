import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() currentPokemon;

  constructor() { }

  ngOnInit() {
  }

}
