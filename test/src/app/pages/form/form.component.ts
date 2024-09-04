import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
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
}
