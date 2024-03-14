import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent {
  processedText: string = '';
  transcribedAudio: string = '';
  generatedText: string = '';


  constructor (private backendService: BackendService) { }

  processText(text: string) {
      this.backendService.uploadJSON(text).subscribe({
        next: (response) => console.log(`Processed text: ${response}`), 
        error: (e) => console.error(`Error sending text: ${e}`),
        complete: () => console.info('complete')});
  }

  processAudio(audioBlob: Blob) {
    // console.log(`Audio blob received frontend: ${audioBlob.size / 1000} KB`);
    this.backendService.sendAudio(audioBlob).subscribe({
      next: (response) => console.log(`${response.message}: ${response.fileInfo / 1000} KB written to the server`),
      error: (e) => console.error(`Error sending audio: ${e}`),
      complete: () => console.info('audio uploaded successfully')});
  }

  transcribeAudio() {
    this.backendService.transcribeAudio().subscribe({
      // next: (response) => console.log(`Transcribed audio: ${response}`),
      next: (response) => this.transcribedAudio = response,
      error: (e) => console.error(`Error transcribing audio: ${e}`),
      complete: () => console.info('audio transcribed successfully')
      }
    )
  };

  generateText() {
    this.backendService.generateText().subscribe({
      next: (response) => this.generatedText = response.data,
      error: (e) => console.error(`Error generating text: ${e}`),
      complete: () => console.info('text generated successfully')
    });
  }

}
