import {Component, Input, OnInit} from '@angular/core';
import { Roller } from '../../utils/type/roller';
import { PanierService } from '../../utils/services/panier.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CartRow} from "../../utils/type/cartRow";

@Component({
  selector: 'app-roller-card[roller]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './roller-card.component.html',
  styleUrl: './roller-card.component.css'
})
export class RollerCardComponent implements OnInit{
  @Input() roller!: Roller;

  form = new FormGroup({
    quantity: new FormControl(1, [Validators.min(1)]),
  });

  ngOnInit() {
    this.quantity.addValidators([Validators.max(this.getMaxQuantity())]);
  }

  get quantity() {
    return this.form.controls.quantity;
  }

  cartRow?: CartRow;

  constructor(private panierService: PanierService){}

  submitToCart(): void{
    if(this.form.valid){
      this.cartRow = {roller: this.roller, quantity: this.quantity.value as number};
      this.panierService.addToCart(this.cartRow);
      this.form = new FormGroup({
        quantity: new FormControl(1, [Validators.min(1), Validators.max(this.getMaxQuantity())]),
      });
    }
  }

  getMaxQuantity() {
    let maxQuantity = this.panierService.getCartRow(this.roller.id)?.quantity;
    if(maxQuantity != null) {
      maxQuantity = this.roller.stock - maxQuantity;
    } else {
      maxQuantity = this.roller.stock;
    }
    return maxQuantity;
  }
}
