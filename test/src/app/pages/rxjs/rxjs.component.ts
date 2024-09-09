import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

}
