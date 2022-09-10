import { ContactService } from './../Services/contact.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  allContacts: any;
  selectedContact: any;

  // ActivatedRoute is used to get particular part of the URL
  constructor(
    private cService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // extract the id of the selected contact
    let id = this.route.snapshot.params['id'];
    console.log('ID of the contact is : ', id);

    // get details of the selected contact
    this.cService.getAllContacts().subscribe((data) => {
      this.allContacts = data;
      console.log(this.allContacts);

      for (let c of this.allContacts) {
        if (c.id == id) {
          this.selectedContact = c;
          console.log(this.selectedContact);
        }
      }
    });
  }

  noContactMessage = false;
  updateContact(form: NgForm) {
    window.alert('Contact has been Updated successfull!');
    form.value.contactImg = this.imageURL;
    this.cService
      .updateContact(this.selectedContact.id, form.value)
      .subscribe((res) => {
        console.log(res);
      });
    this.router.navigate(['contacts']);

    this.allContacts = this.cService.getAllContacts().subscribe((data) => {
      console.log(data);
      this.allContacts = data;

      if (this.allContacts.length === 0) {
        this.noContactMessage = !this.noContactMessage;
        console.log('No contacts found!');
      }
    });
  }

  toggleOldImage = true;
  toggleNewImage = false;
  imageURL: any;

  updateImage() {
    // prompt
    this.imageURL = window.prompt('Enter URL of the image below : ');
    console.log(this.imageURL);
    if (!this.toggleOldImage && this.imageURL != '') {
    } else if (this.imageURL != '') {
      // toggle
      this.toggleOldImage = !this.toggleOldImage;
      this.toggleNewImage = !this.toggleNewImage;
    }
  }
}
