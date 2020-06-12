import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexService{
  URL_PATH = 'https://pokeapi.co/api/v2/';
  currentPokemon;
  pokemons;

  constructor(private http: HttpClient) {}

  getAll(){
    return new Promise((resolve, reject) => {
      this.http.get(this.URL_PATH+'pokemon?limit=1000&offset=0')
        .subscribe(res => {
          resolve(res)
        })
      })
    }
    
  getPokemonById(id){
    let newPath = this.URL_PATH+'pokemon/'+id;
    return this.http.get(newPath);
  }
    
  getPokemonByUrl(url){
    return this.http.get(url);
  }

  getCurrentPokemon(){
    return new Promise((resolve, reject) => {
      if(this.currentPokemon){
        resolve(this.currentPokemon)
      }
    })
  }
    
  setCurrentPokemonByName(pokemon){
    let url = this.URL_PATH+'pokemon/'+pokemon.toLowerCase();
    this.currentPokemon = null;
    return new Promise((resolve, reject) => {
      this.getPokemonByUrl(url)
      .subscribe(res => {
        this.currentPokemon = res;
        resolve(res)
        })
      })
    }
    
    setCurrentPokemonByUrl(pokemonUrl){
      this.currentPokemon = null;
      return new Promise((resolve, reject) => {
        this.getPokemonByUrl(pokemonUrl)
        .subscribe(res => {
          this.currentPokemon = res;
          resolve(res);
        })
      })
    }
  }
  
  /*   setCurrentPokemonById(id){
      this.currentPokemon = null;
      return new Promise((resolve, reject) => {
        this.getPokemonById(id)
          .subscribe(res => {
            this.currentPokemon = res;
            resolve(res)
          })
      })
    } */