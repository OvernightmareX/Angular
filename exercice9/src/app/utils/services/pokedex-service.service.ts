import { Injectable } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  pokedex: Pokemon[] = []; 

  constructor() { }

  addToPokedex(pokemon: Pokemon){
    if(!this.isInPokedex(pokemon)){
      this.pokedex.push(pokemon); 
    }
  }

  isInPokedex(pokemon: Pokemon){
    return this.pokedex.find((poke) => poke.name == pokemon.name && poke.description == pokemon.description); 
  }

  removeFromPokedex(pokemon: Pokemon){
    if(this.isInPokedex(pokemon))
      this.pokedex.splice(this.pokedex.indexOf(pokemon), 1);
  }
}
