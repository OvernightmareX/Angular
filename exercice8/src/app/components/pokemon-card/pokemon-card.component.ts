import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

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
  
  deletePokemon(){
    this.pokeToDelete.emit(this.poke); 
  }
}
