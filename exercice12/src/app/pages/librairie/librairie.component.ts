import { Component } from '@angular/core';
import { Book } from '../../model/book';
import { ReadedPipe } from '../../utils/pipes/readed.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [ReadedPipe, FormsModule],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css'
})
export class LibrairieComponent {

  isSubmitted = false; 
  newBook: Book = {title: "", author :"", isRead: false}; 

  library: Book[] = [
    {title: "The witcher", author: "Andrej", isRead: false},
    {title: "Full Metal Alchemist", author: "Hiromu Arakawa", isRead: false}
  ]; 

  toggleRead(index: number){
    this.library[index].isRead = !this.library[index].isRead;
  }

  submitBook(){
    this.isSubmitted = true; 
    if(!this.titleIsEmpty && !this.authorIsEmpty){
      this.library.push({title: this.newBook.title, author: this.newBook.author,isRead: false}); 
      this.isSubmitted = false; 
    }
  }

  get titleIsEmpty() {
    return this.isSubmitted && this.newBook.title.length == 0; 
  }

  get authorIsEmpty() {
    return this.isSubmitted && this.newBook.author.length == 0; 
  }

}
