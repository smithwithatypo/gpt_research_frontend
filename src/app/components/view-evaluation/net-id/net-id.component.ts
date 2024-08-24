import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-net-id',
  templateUrl: './net-id.component.html',
  styleUrls: ['./net-id.component.sass']
})
export class NetIDComponent {
  @Output() textSave = new EventEmitter<string>();

  netID: string = '';
  saved: boolean = false;

  saveText() {
    this.textSave.emit(this.netID);
    this.saved = true;
  }

  clearAutosave() {
    this.saved = false;
  }

}
