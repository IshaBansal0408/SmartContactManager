import { ContactService } from './../Services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor(private cService: ContactService, private router: Router) {}

  allContacts: any;
  noContactMessage = false;
  ngOnInit(): void {
    this.allContacts = this.cService.getAllContacts().subscribe((data) => {
      console.log(data);
      this.allContacts = data;

      if (this.allContacts.length === 0) {
        this.noContactMessage = !this.noContactMessage;
        console.log('No contacts found!');
      }
    });
  }

  result: any;
  deleteContact(id: any) {
    this.result = window.confirm(
      'Are you sure you want to delete the contact?'
    );
    if (this.result == true) {
      this.cService.deleteContact(id).subscribe((res) => {
        console.log(res);
        // reload the page automatically to avoid data loss
        this.router.navigate(['contacts']); //navigate to contact page
        // load all the contacts again
        this.allContacts = this.cService.getAllContacts().subscribe((data) => {
          console.log(data);
          this.allContacts = data;

          if (this.allContacts.length === 0) {
            this.noContactMessage = !this.noContactMessage;
            console.log('No contacts found!');
          }
        });
      });
    }
  }
}
