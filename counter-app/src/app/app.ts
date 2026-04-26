import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('counter-app');

  count: number = 0;

  HandleCounter(operation: string) {
    if (operation == 'minus') {
      if(this.count > 0){
        this.count--;
      }
    } else if (operation == 'plus') {
      this.count++;
    }
    else {
      this.count = 0;
    }
  }
}
