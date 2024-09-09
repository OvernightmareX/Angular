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

  count(isUp: boolean): void{
    isUp ? this.counter++ : this.counter--;
    this.color = this.counter % 2 == 0 ? "green" : "red"; 
  }
}
