import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';

export class ApplicationFormStore {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  postalCode: string = '';
  militaryAffiliation: string = '';

  constructor(initialData: any = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    postalCode: '',
    militaryAffiliation: '',
  }) {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      email: observable,
      phoneNumber: observable,
      postalCode: observable,
      militaryAffiliation: observable,
      addFirstName: action,
      addLastName: action,
      addEmail: action,
      addPhoneNumber: action,
      addPostalCode: action,
      addMilitaryAffiliation: action,
    })

    makePersistable(this, {
      name: 'ApplicationFormStore',
      properties: [
        'firstName',
        'lastName',
        'email',
        'phoneNumber',
        'postalCode',
        'militaryAffiliation',
      ],
    })

    this.firstName = initialData.firstName;
    this.lastName = initialData.lastName;
    this.email = initialData.email;
    this.phoneNumber = initialData.phoneNumber;
    this.postalCode = initialData.postalCode;
    this.militaryAffiliation = initialData.militaryAffiliation;
  }

  addFirstName(firstName: string) {
    this.firstName = firstName;
  }

  addLastName(lastName: string) {
    this.lastName = lastName;
  }

  addEmail(email: string) {
    this.email = email;
  }

  addPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  addPostalCode(postalCode: string) {
    this.postalCode = postalCode;
  }

  addMilitaryAffiliation(militaryAffiliation: string) {
    this.militaryAffiliation = militaryAffiliation;
  }
}