import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.mainComponent.html',
  styleUrls: ['./app.mainComponent.css']
})
export class MainComponent {
  title: string;
  copyrightLbl: string;
  copyrightBy: string;

  constructor(){

    console.clear();

    this.title = 'This is the main component in StkAngular application.';
    this.copyrightLbl = "Copyrigth ";
    this.copyrightBy = "José Luis Rojas Gómez"

  }
}
