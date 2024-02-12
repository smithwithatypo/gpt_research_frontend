import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class TextInputComponent {
  @Output() textSubmit = new EventEmitter<string>();

  text: string = '';

  constructor() { }

  sendText() {
    this.textSubmit.emit(this.text);
  }
}
