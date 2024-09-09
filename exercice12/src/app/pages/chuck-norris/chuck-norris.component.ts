import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../../utils/services/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  standalone: true,
  imports: [],
  templateUrl: './chuck-norris.component.html',
  styleUrl: './chuck-norris.component.css'
})
export class ChuckNorrisComponent implements OnInit {

  joke: string =""; 
  
  constructor(private chuckService: ChuckNorrisService){}

  ngOnInit(): void{
    this.chuckService.getRandomJoke().subscribe(
      (val) => {
        this.joke = val; // Assign the extracted value to a component variable
      }
    )
  }

  changeJoke(){
    this.chuckService.getRandomJoke().subscribe(
      (val) => {
        this.joke = val; // Assign the extracted value to a component variable
      }
    )
  }
}
