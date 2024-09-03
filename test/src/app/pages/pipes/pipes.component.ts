import { DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RainbowPipe } from '../../utils/pipes/rainbow.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    UpperCasePipe, 
    LowerCasePipe, 
    TitleCasePipe,
    DecimalPipe,
    DatePipe,
    RainbowPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  message: string = "Yo yo yo yo yo!!"; 
  pi: number = Math.PI; 
  today: Date = new Date(); 
}
