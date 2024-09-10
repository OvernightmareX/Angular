import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Roller } from '../../utils/type/roller';
import {PanierService} from "../../utils/services/panier.service";
import {CartRow} from "../../utils/type/cartRow";

@Component({
  selector: 'app-table-roller[view]',
  standalone: true,
  imports: [],
  templateUrl: './table-roller.component.html',
  styleUrl: './table-roller.component.css'
})
export class TableRollerComponent {
  @Input() cartRowInTable: CartRow[] = [];
  @Input() view!: "admin" | "cart";
  @Output() rollerInShopTableChanged = new EventEmitter<CartRow[]>();

  constructor(private panierService: PanierService) {}

  deleteRollerFromShop(id: number){
    let index = this.cartRowInTable.findIndex((r) => r.roller.id == id)
    if(index >= 0){
      this.cartRowInTable.splice(index, 1);
      this.rollerInShopTableChanged.emit(this.cartRowInTable);
      localStorage.setItem('rollerInShop', JSON.stringify(this.cartRowInTable));
    }
  }

  deleteRollerFromCart(id: number) {
    let index = this.cartRowInTable.findIndex((r) => r.roller.id == id)
    if(index >= 0){
      this.panierService.removeFromCart(this.cartRowInTable[index].roller);
    }
  }
}
