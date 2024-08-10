import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserCheckService {

  constructor() { }

  checkForSafari(): void {
    const userAgent = window.navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

    if (isSafari) {
      alert("Audio transcription not yet supported for Safari or iPhones. \nThank you");
    }
  }
}
