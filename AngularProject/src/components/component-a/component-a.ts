import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-a.html'
})
export class ComponentA {
  name = model('');
}
