import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private uService: UserService, private router: Router) {}

  ngOnInit(): void {}

  registerUser(form: NgForm) {
    window.alert('You have been Registered Successfully!');
    this.router.navigate(['/login']);
  }
}
