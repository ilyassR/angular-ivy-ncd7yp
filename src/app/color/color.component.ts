import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  bgColor = "red";

  constructor() { }

  changeColor() {
    //this.bgColor = 
    console.log(this.bgColor);
  }

}