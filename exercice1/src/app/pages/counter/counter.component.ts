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
  color: string = "green"; 
  counter: number = 0; 

  countUp(): void{
    this.counter++;

    if(this.counter % 2 == 0)
      this.color = "green"; 
    else 
      this.color = "red"; 
  }

  countDown(): void{
    this.counter--;

    if(this.counter % 2 == 0)
      this.color = "green"; 
    else 
      this.color = "red"; 
  }

}
