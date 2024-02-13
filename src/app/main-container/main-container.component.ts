import { Component } from '@angular/core';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent {
  processedText: string = '';

  constructor (private backendService: BackendService) { }

  processText(text: string) {
      this.backendService.sendText(text).subscribe({
        next: (response) => console.log(`Processed text: ${response}`), 
        error: (e) => console.error(`Error sending text: ${e}`),
        complete: () => console.info('complete')});
  }

  // processAudio(audioBlob: Blob) {   // TODO: build this method
  //   // Logic to send audio to backend and update processedText
  // }
}
