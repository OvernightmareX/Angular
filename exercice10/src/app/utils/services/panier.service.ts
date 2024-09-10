import { Injectable } from '@angular/core';
import {Roller} from "../type/roller";
import {CartRow} from "../type/cartRow";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  rollersInCart: CartRow[] = [];

  constructor() { }

  getAll(): CartRow[] {
    return this.rollersInCart;
  }

  addToCart(cartRow: CartRow) {
    if(!this.isRollerInCart(cartRow.roller)) {
      this.rollersInCart.push(cartRow);
    } else {
      const index = this.rollersInCart.findIndex(cr => cr.roller.id === cartRow.roller.id);
      if(index > -1){
        let quantityTotal: number = cartRow.quantity + this.rollersInCart[index].quantity;
        if(quantityTotal > cartRow.roller.stock) {
          quantityTotal = cartRow.roller.stock;
          alert(`Attention le stock restant n'est pas suffisant, vous avez ${quantityTotal} articles dans le panier.`);
        }
        this.rollersInCart[index].quantity = quantityTotal;
      }
    }
  }

  getCartRow(id: number): CartRow | null {
    const index = this.rollersInCart.findIndex(cr => cr.roller.id === id);
    if(index > -1) {
      return this.rollersInCart[index];
    }
    return null;
  }

  removeFromCart(roller: Roller) {
    const index = this.rollersInCart.findIndex(cartRow => cartRow.roller.id === roller.id);
    if(index > -1) {
      this.rollersInCart.splice(index, 1);
    }
  }

  isRollerInCart(roller: Roller): boolean {
    const index = this.rollersInCart.findIndex(cartRow => cartRow.roller.id === roller.id);
    return index > -1;
  }
}
