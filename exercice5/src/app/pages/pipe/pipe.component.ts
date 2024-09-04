import { Component } from '@angular/core';
import { TableOrderPipe } from '../../utils/pipes/table-order.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [TableOrderPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  series = ["Fallout","The big bang theory","Walking dead", "The punisher", "Breaking Bad", "Mushokou tensei", "Tensei no slime"]; 

  order: string = "Asc"; 
}
