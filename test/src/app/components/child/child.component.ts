import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child[data]',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() data!: string; 
}
