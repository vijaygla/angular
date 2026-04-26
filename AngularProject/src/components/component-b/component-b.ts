import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-b',
  standalone: true,
  templateUrl: './component-b.html'
})
export class ComponentB {
  @Input() name: string = '';
}


