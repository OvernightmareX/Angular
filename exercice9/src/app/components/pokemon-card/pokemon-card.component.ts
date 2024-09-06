import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { PokedexServiceService } from '../../utils/services/pokedex-service.service';

@Component({
  selector: 'app-pokemon-card[poke]',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() poke?: Pokemon;
  @Output() pokeToDelete = new EventEmitter<Pokemon>()

  constructor(private pokedex: PokedexServiceService){

  }
  
  deletePokemon(){
    this.pokeToDelete.emit(this.poke); 
  }

  addToPokedex(){
    if(this.poke)
      this.pokedex.addToPokedex(this.poke); 
  }
}
