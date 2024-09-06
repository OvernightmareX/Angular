import { Component } from '@angular/core';
import { Roller } from '../../utils/model/roller/roller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allRoller: Roller [] = []; 

  constructor(){
    let stored = localStorage.getItem('rollerInShop')
    if(stored)
      this.allRoller = JSON.parse(stored); 
  }
}
