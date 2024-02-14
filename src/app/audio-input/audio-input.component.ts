import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audio-input',
  templateUrl: './audio-input.component.html',
  styleUrls: ['./audio-input.component.sass']
})
export class AudioInputComponent {
  private mediaRecorder!: MediaRecorder;
  private audioChunks: Blob[] = [];
  @Output() audioRecorded = new EventEmitter<Blob>();

  constructor() { }

  startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.audioChunks = [];

        this.mediaRecorder.addEventListener('dataavailable', event => {
          this.audioChunks.push(event.data);
        });

        this.mediaRecorder.start();
      })
      .catch(error => console.error('Error accessing the microphone', error));
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.mediaRecorder.onstop = () => {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
      this.audioRecorded.emit(audioBlob); // Emit the audio blob to the parent component
    };
  }

}
