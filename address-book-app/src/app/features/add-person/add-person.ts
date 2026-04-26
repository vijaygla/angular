import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonService } from '../../core/services/person';
import { PersonFormValue } from '../../shared/models/person';

@Component({
  selector: 'app-add-person',
  imports: [FormsModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css',
})
export class AddPerson {
  protected isOpen = false;
  protected form: PersonFormValue = this.emptyForm();
  protected readonly phonePattern = /^[0-9]{10}$/;

  constructor(private readonly personService: PersonService) {}

  protected openDialog(): void {
    this.form = this.emptyForm();
    this.isOpen = true;
  }

  protected closeDialog(): void {
    this.isOpen = false;
  }

  protected addPerson(): void {
    this.form.phoneNumber = this.normalizePhoneNumber(this.form.phoneNumber);

    if (!this.phonePattern.test(this.form.phoneNumber)) {
      return;
    }

    this.personService.addPerson(this.form);
    this.closeDialog();
  }

  protected updatePhoneNumber(value: string): void {
    this.form.phoneNumber = this.normalizePhoneNumber(value);
  }

  protected isPhoneNumberInvalid(): boolean {
    return this.form.phoneNumber.length > 0 && !this.phonePattern.test(this.form.phoneNumber);
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
