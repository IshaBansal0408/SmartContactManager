import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../Services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  allContacts: any;
  selectedContact: any;
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
}
