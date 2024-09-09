import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokedexServiceService } from '../../utils/services/pokedex-service.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  nbPokemon: number = 0; 

  constructor(private pokedexService: PokedexServiceService){}

  ngOnInit() {
    this.pokedexService.pokemonInPokedex$.subscribe({
      next: (value) => this.nbPokemon = value,
    })
  }
}
