import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from '../../utils/services/pokedex-service.service';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit{

  pokedex: Pokemon[] = [];

  constructor(private pokedexService: PokedexServiceService){

  }

  ngOnInit(): void {
    this.pokedex = this.pokedexService.pokedex;
  }

  removeFromPokedex(pokemon: Pokemon){
    this.pokedexService.removeFromPokedex(pokemon);
  }
}
