import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.sass']
})
export class ViewLoginComponent implements OnInit{

  ngOnInit(): void {
    this.checkForSafari();
  }

  checkForSafari(): void {
    const userAgent = window.navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

    if (isSafari) {
      alert("Please note: some functionality does not work in Safari. \nConsider using a different browser for this app.");
    }
  }
  passcode: string = '';

  constructor(private router: Router) {}

  login() {
    const correctPasscode = 'oop'; 

    if (this.passcode === correctPasscode) {
      this.router.navigate(['/evaluation']);
    } else {
      alert('Incorrect passcode.');
      this.passcode = '';
    }
  }
}
