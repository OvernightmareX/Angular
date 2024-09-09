import { Injectable } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  pokedex: Pokemon[] = []; 

  pokemonInPokedex$ = new BehaviorSubject<number>(0);

  constructor() { }

  addToPokedex(pokemon: Pokemon){
    if(!this.isInPokedex(pokemon)){
      this.pokedex.push(pokemon); 
      this.pokemonInPokedex$.next(this.pokedex.length); 
    }
  }

  isInPokedex(pokemon: Pokemon){
    return this.pokedex.find((poke) => poke.name == pokemon.name && poke.description == pokemon.description); 
  }

  removeFromPokedex(pokemon: Pokemon){
    if(this.isInPokedex(pokemon)){
      this.pokedex.splice(this.pokedex.indexOf(pokemon), 1);
      this.pokemonInPokedex$.next(this.pokedex.length); 
    }
  }

}
