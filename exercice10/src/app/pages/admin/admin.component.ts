import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Roller } from '../../utils/model/roller/roller.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRollerComponent } from "../../components/form-roller/form-roller.component";
import { TableRollerAdminComponent } from "../../components/table-roller-admin/table-roller-admin.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, FormRollerComponent, TableRollerAdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  rollerInShopAdmin: Roller[] = []; 

  constructor(){
    let stored = localStorage.getItem('rollerInShop')
    if(stored)
      this.rollerInShopAdmin = JSON.parse(stored); 
  }

  
}
