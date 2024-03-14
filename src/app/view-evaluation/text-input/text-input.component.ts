import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class TextInputComponent {
  @Output() textSubmit = new EventEmitter<string>();

  user_code: string = '';

  constructor() { }

  sendText() {
    this.textSubmit.emit(this.user_code);
  }
}
