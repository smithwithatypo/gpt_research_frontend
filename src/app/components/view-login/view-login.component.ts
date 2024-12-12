import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.sass']
})
export class ViewLoginComponent {
  passcode: string = '';

  constructor(private router: Router) {}

  login() {
    const correctPasscode = 'oop';   // temporary

    if (this.passcode === correctPasscode) {
      this.router.navigate(['/evaluation']);
    } else {
      alert('Incorrect passcode.');
      this.passcode = '';
    }
  }
}
