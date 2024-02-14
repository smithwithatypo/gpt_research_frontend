import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-transcribe-audio',
  templateUrl: './transcribe-audio.component.html',
  styleUrls: ['./transcribe-audio.component.sass']
})
export class TranscribeAudioComponent {

  @Output() transcriptionComplete = new EventEmitter<any>(); 

  constructor() { };

  transcribe() {
    this.transcriptionComplete.emit();
  }
}
