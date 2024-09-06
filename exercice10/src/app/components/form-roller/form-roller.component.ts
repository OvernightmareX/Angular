import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Roller } from '../../utils/model/roller/roller.component';

@Component({
  selector: 'app-form-roller',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-roller.component.html',
  styleUrl: './form-roller.component.css'
})
export class FormRollerComponent {
  isSubmitted = false; 
  @Input() rollerInShopForm: Roller[] = []; 
  @Output() rollerInShopFormChanged = new EventEmitter<Roller[]>();

  rollerForm = new FormGroup({
    id: new FormControl(0), 
    name: new FormControl('', [Validators.required]),
    imageUrl: new FormControl(''),
    size: new FormControl(16, [Validators.min(16)]),
    price: new FormControl(0, [Validators.min(0)]),
    color: new FormArray([
      new FormControl('', [Validators.required]),
    ]),
    nbWheel: new FormControl(2, [Validators.min(2)]),
  }); 

  get id(){
    return this.rollerForm.controls.id; 
  }

  get name() {
    return this.rollerForm.controls.name; 
  }

  get imageUrl() {
    return this.rollerForm.controls.imageUrl; 
  }

  get size(){
    return this.rollerForm.controls.size; 
  }

  get price(){
    return this.rollerForm.controls.price; 
  }

  get color(){
    return this.rollerForm.controls.color; 
  }

  get nbWheel(){
    return this.rollerForm.controls.nbWheel; 
  }

  resetForm(){
    this.rollerForm = new FormGroup({
      id: new FormControl(0), 
      name: new FormControl('', [Validators.required]),
      imageUrl: new FormControl(''),
      size: new FormControl(16, [Validators.min(16)]),
      price: new FormControl(0, [Validators.min(0)]),
      color: new FormArray([
        new FormControl('', [Validators.required]),
      ]),
      nbWheel: new FormControl(2, [Validators.min(2)]),
    }); 
  
  }

  addColor(){
    this.color.push( new FormControl('', [Validators.required]));
  }

  submitRoller(): void{
    if(this.rollerForm.valid){
      if(this.rollerInShopForm.length > 0)
        this.id.setValue(this.rollerInShopForm[this.rollerInShopForm.length-1].id + 1); 
      else 
        this.id.setValue(0); 

      this.rollerInShopForm.push(this.rollerForm.value as unknown as Roller); 
      this.rollerInShopFormChanged.emit(this.rollerInShopForm); 
      localStorage.setItem('rollerInShop', JSON.stringify(this.rollerInShopForm));
      this.resetForm(); 
     }
  }
}
