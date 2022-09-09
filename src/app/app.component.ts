import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SmartContactManager';
  constructor(private router: Router) {}
  logoutUser() {
    window.alert('You have been Logged Out Successfully!');
    this.router.navigate(['home']);
  }
}
