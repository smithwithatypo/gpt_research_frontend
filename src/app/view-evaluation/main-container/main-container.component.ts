import { Component, NgZone, ChangeDetectorRef, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ClientData } from 'src/app/models/clientData';


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
      alert("Please note: Audio transcription is not yet supported for Safari or iPhones. \nThank you");
    }
  }


  clientData: ClientData = new ClientData({
    feedback: 'neutral',
    datetime: new Date()
  }, {
    temperature: 0.1,
    voice: 'Professor',
    difficulty: 1,
    model: '3'
  }, {
    code: '',
    transcript: '',
    problemID: 0
  });

  // initialize variables
  // processedText: string = '';
  // transcribedAudio: string = '';
  // studentCodeData: string = '';
  // problemChoice: number = 0;
  // promptPerson: string = 'Professor';
  // promptDifficulty: number = 1;
  
  problemSummaries: any;
  oneProblemData: any;
  isLoadingAI: boolean = false;
  isLoadingAudio: boolean = false;
  generatedText: string = '';
  


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
    this.clientData.studentData.problemID = problemID;
    this.backendService.getOneProblem(problemID).subscribe({
      next: (response) => this.oneProblemData = response.data,
      error: (e) => console.error(`Error getting problem: ${e}`),
      complete: () => console.info('loaded problem')
    });
  }

  processText(text: string) {
      // this.studentCodeData = text;
      this.clientData.studentData.code = text;
  }

  transcribeAudio(audioBlob: Blob) {
    this.isLoadingAudio = true;
    this.changeDetectorRef.detectChanges(); // Manually trigger change detection

    this.backendService.transcribeAudio(audioBlob).subscribe({
      next: (response) => {
        this.zone.run(() => {    // Ensures change detection is triggered
          // this.transcribedAudio = response;
          this.clientData.studentData.transcript = response;
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

  setPromptPerson(person: string) {
    this.clientData.promptData.voice = person;
  }

  setDifficultyValue(value: number) {
    this.clientData.promptData.difficulty = value;
  }

  setTemperatureValue(value: number) {
    this.clientData.promptData.temperature = value;
  }

  setModelValue(value: string) {
    this.clientData.promptData.model = value;
  }

  generateTextPost() {
    this.isLoadingAI = true;
    this.backendService.generateTextPost(this.clientData).subscribe({
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
