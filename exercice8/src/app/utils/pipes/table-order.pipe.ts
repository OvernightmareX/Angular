import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableOrder',
  standalone: true
})
export class TableOrderPipe implements PipeTransform {

  transform(value: string[], args: string): string[] {

    if(args == "Asc")
      return value.sort((a, b) => a.localeCompare(b))    
    
    if (args == "Desc")
      return value.sort((a, b) => b.localeCompare(a))    
    
    return value; 
  }
}
