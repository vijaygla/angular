import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TypeOfAttributeFunctionPropertiesData');

  name = "vijay"
  name2 : string = "kumar";
  var : any = true;

  updateVariableType() {
    let x : number = 10;
    this.sum(30, 40)
  }

  sum(a : number, b : number) {
    console.log(a+b);
  }
}
