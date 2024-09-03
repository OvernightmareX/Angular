import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})
export class BlocksComponent {
  isLogged = false; 
  weapons = ['lance', "épée", "hache", "arc"];

  imageURL: string = "https://www.culture-games.com/wp-content/uploads/personnages/Geralt-de-Riv-liste-une.jpg"; 

  user = {
    name: "toto"
  }

  toggleLogged(){
    this.isLogged = !this.isLogged; 
  }
}
