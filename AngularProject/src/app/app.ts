import { Component, signal } from '@angular/core';
import { ComponentA} from '../components/component-a/component-a';
import { ComponentB } from '../components/component-b/component-b';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentA, ComponentB],
  templateUrl: './app.html'
})
export class AppComponent {
  receivedName = signal('');
}
