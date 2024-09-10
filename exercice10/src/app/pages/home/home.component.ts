import { Component } from '@angular/core';
import { Roller } from '../../utils/type/roller';
import {RollerCardComponent} from "../../components/roller-card/roller-card.component";
import {CartRow} from "../../utils/type/cartRow";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RollerCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  allRoller: CartRow [] = [];
  displayRoller: CartRow[] = [];
  priceOrder: string = "ASC";

  constructor(){
    let stored = localStorage.getItem('rollerInShop')
    if(stored) {
      this.allRoller = JSON.parse(stored);
      this.displayRoller = [...this.allRoller];
      this.displayRoller.sort((a, b) => a.roller.price - b.roller.price);
    }
  }

  sortItem() {
    if(this.priceOrder == "ASC") {
      this.displayRoller.sort((a, b) => a.roller.price - b.roller.price);
    } else if(this.priceOrder == "DESC") {
      this.displayRoller.sort((a, b) => b.roller.price - a.roller.price);
    }
  }

  handleSelect($event: Event) {
    const selectElement = $event.target as HTMLSelectElement;
    this.priceOrder = selectElement.value
    this.sortItem();
  }

  handleInput($event: Event) {
    const inputElement = $event.target as HTMLInputElement;
    this.displayRoller = this.allRoller.filter(cartRow => cartRow.roller.name.toUpperCase().includes(inputElement.value.toUpperCase()));
    this.sortItem();
  }


}
