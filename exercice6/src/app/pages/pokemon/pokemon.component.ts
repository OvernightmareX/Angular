import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { typePokemon } from '../../model/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  message: string = ""; 

  isSubmitted = false; 

  pokemonTypes = Object.values(typePokemon);

  pokemon_form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    types: new FormArray([
      new FormControl()
    ]),
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
      console.log("Pokemon saved", this.pokemon_form.value);
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

  addType(){
    this.types.push(new FormControl()); 
  }

}
