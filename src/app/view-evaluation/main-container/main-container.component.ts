import { Component, NgZone } from '@angular/core';
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
  isLoadingAI = false;
  isLoadingAudio = false;


  constructor (private backendService: BackendService, private zone: NgZone) { }

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

  transcribeAudio(audioBlob: Blob) {
    this.isLoadingAudio = true;
    this.backendService.transcribeAudio(audioBlob).subscribe({
      next: (response) => {
        this.zone.run(() => {    // Ensures change detection is triggered
          this.transcribedAudio = response;
          this.isLoadingAudio = false;
        });
      },
      error: (e) => {
        this.isLoadingAudio = false;
        console.error(`Error transcribing audio: ${e}`);
      },      
      complete: () => console.info('audio transcribed successfully')
    });
  }

  generateTextPost() {
    this.isLoadingAI = true;
    this.backendService.generateTextPost(this.studentCodeData, this.problemChoice, this.transcribedAudio).subscribe({
      next: (response) => {
        this.generatedText = response.data;
        this.isLoadingAI = false;
      },
      error: (e) => {
        console.error(`Error generating text: ${e}`);
        this.isLoadingAI = false;
      },
      complete: () => console.info('text generated successfully')
    });
  }

}
