import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('event-handling');

  HandleEvent(event: any) {
    console.log("function called : ", event.type);
    console.log("function called : ", event.target);
    console.log("function called : ", event.target.name);
  }
}
