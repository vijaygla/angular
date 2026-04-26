import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('functionCallOnButtonClick');

  DisplayDetails() {
    console.log("This is detaiils function contains some details");
  }

  FunctionInsideFunction() {
    console.log("This is function call inside any function");

    this.DisplayDetails();
  }

  Sum(a : number, b : number){
    console.log("Sum : ", a + b);
  }

  Profile(name : string, age : number)
  {
    console.log("Name : ", name);
    console.log("Age : ", age);
  }
}
