import { Component } from '@angular/core';
import { AddPerson } from '../add-person/add-person';
import { PersonList } from '../person-list/person-list';

@Component({
  selector: 'app-address-book',
  imports: [AddPerson, PersonList],
  templateUrl: './address-book.html',
  styleUrl: './address-book.css',
})
export class AddressBook {}
