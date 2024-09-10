import {Component, OnInit} from '@angular/core';
import {PanierService} from "../../utils/services/panier.service";
import {Roller} from "../../utils/type/roller";
import {TableRollerComponent} from "../../components/table-roller/table-roller.component";
import {CartRow} from "../../utils/type/cartRow";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [
    TableRollerComponent
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  rollersInCart: CartRow[] = [];

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.rollersInCart = this.panierService.getAll();
    console.table(this.rollersInCart);
  }
}
