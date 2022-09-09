import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { TokenGenerator } from 'ts-token-generator';
import { TokenBase } from 'ts-token-generator';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private uService: UserService, private router: Router) {}

  ngOnInit(): void {}

  userData: any;
  token: any;

  loginUser(form: NgForm) {
    console.log(form.value);

    window.alert('You have been Logged In Successfully!');
    this.router.navigate(['/contacts']);
  }
}
