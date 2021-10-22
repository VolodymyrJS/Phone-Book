import { Injectable } from '@angular/core';

export interface ContactData {
  firstName: string,
  sureName: string,
  phone: number
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  contactsData: ContactData[] = [];
  constructor() { }

  addContact(formData: ContactData) {
    this.contactsData.unshift(formData);
  }

  getContactData() {
    return this.contactsData;
  }
}
