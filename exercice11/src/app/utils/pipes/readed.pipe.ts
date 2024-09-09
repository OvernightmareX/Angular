import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../../model/book';

@Pipe({
  name: 'readed',
  standalone: true
})
export class ReadedPipe implements PipeTransform {

  transform(isRead: boolean): string {

    return isRead ? "👍" : "👎";
  }

}
