import { Component } from '@angular/core';
import { AddressBook } from './features/address-book/address-book';

@Component({
  selector: 'app-root',
  imports: [AddressBook],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
