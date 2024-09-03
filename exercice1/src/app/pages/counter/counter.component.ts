import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  color: string = "red"; 
  counter: number = 0; 

  count(): void{
    this.counter++;

    if(this.counter % 2 == 0)
      this.color = "red"; 
    else 
      this.color = "green"; 
  }
}
