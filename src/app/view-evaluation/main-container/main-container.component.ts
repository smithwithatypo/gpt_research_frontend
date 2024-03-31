import { Component, NgZone, ChangeDetectorRef, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})
export class MainContainerComponent implements OnInit{

  ngOnInit(): void {
    this.checkForSafari();
  }

  checkForSafari(): void {
    const userAgent = window.navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

    if (isSafari) {
      alert("Please note: some functionality does not work in Safari. \nConsider using a different browser for this app.");
    }
  }


  // initialize variables
  processedText: string = '';
  transcribedAudio: string = '';
  generatedText: string = '';
  problemSummaries: any;
  oneProblemData: any;
  studentCodeData: string = '';
  problemChoice: number = 0;
  isLoadingAI: boolean = false;
  isLoadingAudio: boolean = false;

  // constructor
  constructor (private backendService: BackendService, private zone: NgZone, private changeDetectorRef: ChangeDetectorRef) { }

  // functions
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
    this.changeDetectorRef.detectChanges(); // Manually trigger change detection

    this.backendService.transcribeAudio(audioBlob).subscribe({
      next: (response) => {
        this.zone.run(() => {    // Ensures change detection is triggered
          this.transcribedAudio = response;
          this.isLoadingAudio = false;
        });
      },
      error: (e) => {
        console.error(`Error transcribing audio: ${e}`);
        this.isLoadingAudio = false;
      },      
      complete: () => {
        console.info('audio transcribed successfully');
      }
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
