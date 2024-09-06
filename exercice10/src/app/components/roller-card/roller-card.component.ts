import { Component, Input } from '@angular/core';
import { Roller } from '../../utils/model/roller/roller.component';
import { PanierService } from '../../utils/services/panier.service';

@Component({
  selector: 'app-roller-card[roller]',
  standalone: true,
  imports: [],
  templateUrl: './roller-card.component.html',
  styleUrl: './roller-card.component.css'
})
export class RollerCardComponent {
  @Input() roller!: Roller; 

  constructor(private panierService: PanierService){}

  
}
