export interface Person {
  id: number;
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

export type PersonFormValue = Omit<Person, 'id'>;
