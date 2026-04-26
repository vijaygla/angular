import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../../core/services/person';
import { Person, PersonFormValue } from '../../shared/models/person';

@Component({
  selector: 'app-person-list',
  imports: [FormsModule],
  templateUrl: './person-list.html',
  styleUrl: './person-list.css',
})
export class PersonList {
  protected editingPerson: Person | null = null;
  protected editForm: PersonFormValue = this.emptyForm();
  protected readonly phonePattern = /^[0-9]{10}$/;

  constructor(private readonly personService: PersonService) {}

  protected get persons(): Person[] {
    return this.personService.getPersons();
  }

  protected deletePerson(id: number): void {
    this.personService.deletePerson(id);
  }

  protected startEdit(person: Person): void {
    this.editingPerson = person;
    this.editForm = {
      fullName: person.fullName,
      address: person.address,
      city: person.city,
      state: person.state,
      zipCode: person.zipCode,
      phoneNumber: person.phoneNumber,
    };
  }

  protected closeEdit(): void {
    this.editingPerson = null;
  }

  protected saveEdit(): void {
    if (!this.editingPerson) {
      return;
    }

    this.editForm.phoneNumber = this.normalizePhoneNumber(this.editForm.phoneNumber);

    if (!this.phonePattern.test(this.editForm.phoneNumber)) {
      return;
    }

    this.personService.updatePerson({
      id: this.editingPerson.id,
      ...this.editForm,
    });
    this.closeEdit();
  }

  protected updatePhoneNumber(value: string): void {
    this.editForm.phoneNumber = this.normalizePhoneNumber(value);
  }

  protected isPhoneNumberInvalid(): boolean {
    return this.editForm.phoneNumber.length > 0 && !this.phonePattern.test(this.editForm.phoneNumber);
  }

  private normalizePhoneNumber(value: string): string {
    return value.replace(/\D/g, '').slice(0, 10);
  }

  private emptyForm(): PersonFormValue {
    return {
      fullName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
    };
  }
}
