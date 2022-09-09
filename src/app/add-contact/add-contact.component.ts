import { Router } from '@angular/router';
import { ContactService } from './../Services/contact.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  constructor(private cService: ContactService, private router: Router) {}

  ngOnInit(): void {}

  addNewContact(form: NgForm) {
    // console.log(typeof form.value);
    form.value.contactImg = this.imageURL;
    this.cService.addNewContact(form.value).subscribe((res) => {
      console.log(res);
      window.alert('Contact added Successfully!');
      this.router.navigate(['contacts']);
    });
  }

  toggleSampleImage = true;
  toggleContactImage = false;
  imageURL: any;

  setContactImage() {
    // prompt
    this.imageURL = window.prompt('Enter URL of the image below : ');
    console.log(this.imageURL);
    if (!this.toggleSampleImage && this.imageURL != '') {
    } else if (this.imageURL != '') {
      // toggle
      this.toggleContactImage = !this.toggleContactImage;
      this.toggleSampleImage = !this.toggleSampleImage;
    }
  }
}
