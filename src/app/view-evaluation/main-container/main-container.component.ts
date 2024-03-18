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
  problemSummaries: any;
  oneProblemData: any;
  studentCodeData: string = '';
  problemChoice: number = 0;


  constructor (private backendService: BackendService) { }

  getProblemSummaries() {
    this.backendService.getProblemSummaries().subscribe({
      next: (response) => this.problemSummaries = response.data,
      error: (e) => console.error(`Error getting problem summaries: ${e}`),
      complete: () => console.info('loaded problem summaries')
    });
  }

  getOneProblem(problemID: number) {
    this.problemChoice = problemID;
    this.backendService.getOneProblem(problemID).subscribe({
      next: (response) => this.oneProblemData = response.data,
      error: (e) => console.error(`Error getting problem: ${e}`),
      complete: () => console.info('loaded problem')
    });
  }

  processText(text: string) {
      this.studentCodeData = text;
  }

  processAudio(audioBlob: Blob) {
    this.backendService.sendAudio(audioBlob).subscribe({
      next: (response) => console.log(`${response.message}: ${response.fileInfo / 1000} KB written to the server`),
      error: (e) => console.error(`Error sending audio: ${e}`),
      complete: () => console.info('audio uploaded successfully')});
  }

  transcribeAudio() {
    this.backendService.transcribeAudio().subscribe({
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

  generateTextPost() {
    this.backendService.generateTextPost(this.studentCodeData, this.problemChoice).subscribe({
      next: (response) => this.generatedText = response.data,
      error: (e) => console.error(`Error generating text: ${e}`),
      complete: () => console.info('text generated successfully')
    });
  }

}
