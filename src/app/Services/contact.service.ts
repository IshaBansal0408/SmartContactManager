import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // Adding Authentication - Extracting Token
  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  // Get all contacts
  getAllContacts() {
    return this.http.get(
      'https://631a23b38e51a64d2bf6fc5e.mockapi.io/contacts'
    );
  }
  // Add a new Contact
  addNewContact(contact: any) {
    return this.http.post(
      'https://631a23b38e51a64d2bf6fc5e.mockapi.io/contacts',
      contact,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }
  // Update a Contact
  updateContact(id: any, contact: any) {
    return this.http.put(
      `https://631a23b38e51a64d2bf6fc5e.mockapi.io/contacts/${id}`,
      contact,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        }),
      }
    );
  }
  // Delete a Contact
  deleteContact(id: any) {
    return this.http.delete(
      `https://631a23b38e51a64d2bf6fc5e.mockapi.io/contacts/${id}`
    );
  }
}
