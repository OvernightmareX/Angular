import { Component } from '@angular/core';
import { Book } from '../../model/book';
import { ReadedPipe } from '../../utils/pipes/readed.pipe';

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [ReadedPipe],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css'
})
export class LibrairieComponent {

  library: Book[] = [
    {title: "The witcher", author: "Andrej", isRead: false},
    {title: "Full Metal Alchemist", author: "Hiromu Arakawa", isRead: false}
  ]; 

  toggleRead(index: number){
    this.library[index].isRead = !this.library[index].isRead;
  }

}
