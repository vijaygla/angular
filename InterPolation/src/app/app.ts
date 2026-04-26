import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:string = "Vijay Kumar" 
  age: number = 20

  CalculateSum(a: number, b:number){
    return a + b;
  }
}

