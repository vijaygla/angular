import { Injectable } from '@angular/core';
import { Person } from '../../shared/models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private nextId = 7;
  private persons: Person[] = [
    {
      id: 1,
      fullName: 'Varaza  Mishra',
      address: 'Marve Road, Next To Maniratna, Malad (west)',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400064',
      phoneNumber: '2228017752',
    },
    {
      id: 2,
      fullName: 'Trishna  Bhalla',
      address: '77 ,rd Flr, , Desaichambers, Nagdevi X Lane, Masjid Bunder (west)',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400003',
      phoneNumber: '2223420607',
    },
    {
      id: 3,
      fullName: 'Anish  Kaskar',
      address: '473 , Sector , Vardhaman Mkt, Sector , Vashi, Navi Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400705',
      phoneNumber: '2227893390',
    },
    {
      id: 4,
      fullName: 'Varaza  Mishra',
      address: 'Marve Road, Next To Maniratna, Malad (west)',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400064',
      phoneNumber: '2228017752',
    },
    {
      id: 5,
      fullName: 'Trishna  Bhalla',
      address: '77 ,rd Flr, , Desaichambers, Nagdevi X Lane, Masjid Bunder (west)',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400003',
      phoneNumber: '2223420607',
    },
    {
      id: 6,
      fullName: 'Anish  Kaskar',
      address: '473 , Sector , Vardhaman Mkt, Sector , Vashi, Navi Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400705',
      phoneNumber: '2227893390',
    },
  ];

  getPersons(): Person[] {
    return this.persons;
  }

  addPerson(person: Omit<Person, 'id'>): void {
    this.persons.unshift({ ...person, id: this.nextId++ });
  }

  updatePerson(person: Person): void {
    const index = this.persons.findIndex((item) => item.id === person.id);

    if (index >= 0) {
      this.persons[index] = { ...person };
    }
  }

  deletePerson(id: number): void {
    const index = this.persons.findIndex((person) => person.id === id);

    if (index >= 0) {
      this.persons.splice(index, 1);
    }
  }
}
