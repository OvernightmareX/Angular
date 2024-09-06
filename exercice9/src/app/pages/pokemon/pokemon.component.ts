import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pokemon, typePokemon } from '../../model/pokemon';
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [ReactiveFormsModule, PokemonCardComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  message: string = ""; 

  isSubmitted = false; 
  pokemons: Pokemon[] = []; 

  pokemonTypes = Object.values(typePokemon);

  constructor(){
    let stored = localStorage.getItem('pokemons')
  
    if(stored)
      this.pokemons = JSON.parse(stored); 
  }

  pokemon_form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    types: new FormControl([]),
    attacks: new FormArray([
      new FormGroup({
        nameAttack: new FormControl(""), 
        descriptionAttack: new FormControl(""), 
        damage: new FormControl(""), 
      })
    ]),
    zone: new FormGroup({
      areaName: new FormControl(""),
      areaRegionName: new FormControl("")
    })
  }); 

  get name() {
    return this.pokemon_form.controls.name; 
  }

  get description() {
    return this.pokemon_form.controls.description; 
  }

  get types(){
    return this.pokemon_form.controls.types; 
  }

  get attacks(){
    return this.pokemon_form.controls.attacks; 
  }

  get zone(){
    return this.pokemon_form.controls.zone; 
  }

  savePokemon(){
    if(this.pokemon_form.valid){
      this.pokemons.push(this.pokemon_form.value as unknown as Pokemon);
      localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
      this.pokemon_form.reset(); 
    }
  }

  addAttack(){
    this.attacks.push(new FormGroup({
      nameAttack: new FormControl(""), 
      descriptionAttack: new FormControl(""), 
      damage: new FormControl(""), 
    }));
  }

  deletePokemon(pokemonToDelete: Pokemon){
    let index = this.pokemons.indexOf(pokemonToDelete); 
    this.pokemons.splice(index, 1);
  }

}
