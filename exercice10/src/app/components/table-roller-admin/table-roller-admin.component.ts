import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Roller } from '../../utils/model/roller/roller.component';

@Component({
  selector: 'app-table-roller-admin',
  standalone: true,
  imports: [],
  templateUrl: './table-roller-admin.component.html',
  styleUrl: './table-roller-admin.component.css'
})
export class TableRollerAdminComponent {
  @Input() rollerInShopTable: Roller[] = []; 
  @Output() rollerInShopTableChanged = new EventEmitter<Roller[]>();

  deleteRoller(id: number){
    let index = this.rollerInShopTable.findIndex((r) => r.id == id)
    if(index >= 0){
      this.rollerInShopTable.splice(index, 1); 
      this.rollerInShopTableChanged.emit(this.rollerInShopTable); 
    }
  }
}
