import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series = ["Fallout", "Walking dead", "The punisher", "Breaking Bad", "Mushokou tensei", "Tensei no slime"]; 

  delete(index: number){
    this.series.splice(index, 1);
  }
}
