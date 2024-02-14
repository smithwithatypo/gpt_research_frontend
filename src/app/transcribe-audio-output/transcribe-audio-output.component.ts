import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transcribe-audio-output',
  templateUrl: './transcribe-audio-output.component.html',
  styleUrls: ['./transcribe-audio-output.component.sass']
})
export class TranscribeAudioOutputComponent {
  @Input() text: string = '';
}
