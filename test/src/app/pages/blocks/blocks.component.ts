import { Component } from '@angular/core';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})
export class BlocksComponent {
  isLogged = false; 
  weapons = ['lance', "épée", "hache", "arc"];

  user = {
    name: "toto"
  }

  toggleLogged(){
    this.isLogged = !this.isLogged; 
  }
}
