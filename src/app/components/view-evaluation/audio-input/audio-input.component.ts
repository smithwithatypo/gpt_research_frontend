import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audio-input',
  templateUrl: './audio-input.component.html',
  styleUrls: ['./audio-input.component.sass'],
})
export class AudioInputComponent {
  // private mediaRecorder!: MediaRecorder;
  // private audioChunks: Blob[] = [];
  private currentStream: MediaStream | null = null;
  private currentMediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  paused: boolean = false;
  recording: boolean = false;
  @Output() audioRecorded = new EventEmitter<Blob>();

  constructor() {}

  startRecording() {
    if (!this.recording) {
      this.recording = true;
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          this.currentStream = stream;
          this.currentMediaRecorder = new MediaRecorder(stream);
          this.currentMediaRecorder.addEventListener(
            'dataavailable',
            (event) => {
              this.audioChunks.push(event.data);
            }
          );
          this.currentMediaRecorder.start();
        })
        .catch((error) =>
          console.error('Error accessing the microphone', error)
        );
    } else if (this.paused) {
      this.paused = false;
      this.currentMediaRecorder = new MediaRecorder(this.currentStream!);
      this.currentMediaRecorder.addEventListener('dataavailable', (event) => {
        this.audioChunks.push(event.data);
      });
      this.currentMediaRecorder.start();
    } else {
      this.paused = true;
      this.currentMediaRecorder!.stop();
    }
  }

  stopAndTranscribeRecording() {
    if (this.currentMediaRecorder) {
      this.currentMediaRecorder.stop();
    }
    const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
    this.audioRecorded.emit(audioBlob);
    this.recording = false;
    this.paused = false;
    this.audioChunks = [];
  }
}

// startRecording() {
//   this.recording = true;
//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then(stream => {
//       this.mediaRecorder = new MediaRecorder(stream);
//       this.audioChunks = [];

//       this.mediaRecorder.addEventListener('dataavailable', event => {
//         this.audioChunks.push(event.data);
//       });

//       this.mediaRecorder.start();
//     })
//     .catch(error => console.error('Error accessing the microphone', error));
// }

// stopRecording() {
//   this.recording = false;
//   this.mediaRecorder.stop();
//   this.mediaRecorder.onstop = () => {
//     const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
//     this.audioRecorded.emit(audioBlob);
//   };
// }
