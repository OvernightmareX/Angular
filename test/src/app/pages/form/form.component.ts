import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  message: string = ""; 

  isSubmitted = false; 

  user = {
    name: '', 
    email: '', 
    password: ''
  }

  submitUser(){
    this.isSubmitted = true; 
    if(!this.passwordHasError){
      console.log(this.user); 
      this.isSubmitted = false; 
    }
  }

  get passwordHasError() {
    return this.isSubmitted && this.user.password.length < 6; 
  }

  // Reactive form

  book_control = new FormControl('', [
    Validators.required,
    Validators.minLength(2)]
  ); 

  saveBook(){
    if(this.book_control.valid){
      console.log("Livre saved", this.book_control.value);
      this.book_control.reset(); 
    }
  }

  //Form group

  formation_form = new FormGroup({
    intitule: new FormControl('', [Validators.required]),
    trainer: new FormGroup({
      firstname: new FormControl("Jean"),
      lastname: new FormControl("Paul")
    }),
    modules: new FormArray([
      new FormControl(''),
      new FormControl('')
    ])
  }); 

  get intitule() {
    return this.formation_form.controls.intitule; 
  }

  get modules() {
    return this.formation_form.controls.modules; 
  }

  saveFormation(){
    if(this.formation_form.valid){
      console.log("Formation saved", this.formation_form.value);
      this.formation_form.reset(); 
    }
  }

  addModule(){
    this.modules.push(new FormControl(''));
  }
}
