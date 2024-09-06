import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../../components/child/child.component";

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit{
  data = "toto"

  constructor(){
    console.log("Constructor");
  }
  
  ngOnInit(): void {
    console.log("On init");
  }
}
