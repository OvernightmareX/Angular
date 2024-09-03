import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NgClass],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  name: string = "Geralt de Rives"; 
  isLogged: boolean = false; 

  imageURL: string = "https://www.culture-games.com/wp-content/uploads/personnages/Geralt-de-Riv-liste-une.jpg"; 
  description: string = "C'est une description !"; 

  color: string = "red"; 

  toggleLogged(){
    this.isLogged = !this.isLogged; 
  }
}
