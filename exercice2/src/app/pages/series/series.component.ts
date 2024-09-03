import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series = ["Fallout","The big bang theory","Walking dead", "The punisher", "Breaking Bad", "Mushokou tensei", "Tensei no slime"]; 

  deleteByIndex(index: number): void{
    this.series.splice(index, 1);
  }
}
