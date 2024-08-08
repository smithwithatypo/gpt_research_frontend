import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio-output',
  templateUrl: './audio-output.component.html',
  styleUrls: ['./audio-output.component.sass']
})
export class AudioOutputComponent {
  @Input() text: string = '';
}
