import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class TextInputComponent {
  @Output() textSubmit = new EventEmitter<string>();

  user_code: string = '';
  saved = false;

  constructor() { }
  
  saveText() {
    this.textSubmit.emit(this.user_code);
    this.saved = true;
  }

  clearAutosave() {
    this.saved = false;
  }

  clearText() {
    this.user_code = '';
    this.saved = false;
  }
}
