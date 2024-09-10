import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Roller } from '../../utils/type/roller';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRollerComponent } from "../../components/form-roller/form-roller.component";
import { TableRollerComponent } from "../../components/table-roller/table-roller.component";
import {CartRow} from "../../utils/type/cartRow";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, FormRollerComponent, TableRollerComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  rollerInShopAdmin: CartRow[] = [];

  constructor(){
    let stored = localStorage.getItem('rollerInShop')
    if(stored)
      this.rollerInShopAdmin = JSON.parse(stored);
  }


}
