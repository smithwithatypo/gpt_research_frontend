import { Component, NgZone, ChangeDetectorRef, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { BrowserCheckService } from '../../../services/browser-check.service';
import { ClientData } from 'src/app/models/clientData';
import { PromptOptions } from 'src/app/models/promptOptions';
import { PromptOptionSingle } from 'src/app/models/promptOptionSingle';



@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.sass']
})

export class MainContainerComponent implements OnInit{

  constructor (private backendService: BackendService, private zone: NgZone, private changeDetectorRef: ChangeDetectorRef, private browserCheckService: BrowserCheckService) { }

  ngOnInit(): void {
    this.browserCheckService.checkForSafari();
    this.getPromptOptions()
  }

  clientData: ClientData = new ClientData({
    feedback: '',
    datetime: new Date()
  }, {
    temperature: 0,
    voice: {
      summary: "professor", 
      text: "be a university level computer science professor"
    },
    instruction: {
      summary: "no logic gaps", 
      text: "my response needs to solve the problem with no logic gaps"
    },
    guardrail: {
      summary: "don't give answer", 
      text: "don't give me the solution. guide me to the answer"
    },
    summarize: {
      summary: "summarize", 
      text: "summarize your response"
    },
    COT: {
      summary: "none", 
      text: ""
    },
    extractor: {
      summary: "none", 
      text: ""
    },
  }, {
    code: '',
    transcript: '',
    problemID: 0
  });
  
  problemSummaries: any;
  oneProblemData: any;
  isLoadingAI: boolean = false;
  isLoadingAudio: boolean = false;
  generatedText: string = '';
  promptOptions: PromptOptions = {};

  getPromptOptions(): void {
    this.backendService.getPromptOptions().subscribe({
      next: (response) => {
        this.promptOptions.voice = response.data.voice,
        this.promptOptions.instruction = response.data.instruction,
        this.promptOptions.guardrail = response.data.guardrail,
        this.promptOptions.summarize = response.data.summarize,
        this.promptOptions.COT = response.data.COT,
        this.promptOptions.extractor = response.data.extractor
      },
      error: (e) => console.error(`Error getting prompt options: ${e}`),
      complete: () => console.info('received prompt options')
    });
  }

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
      this.clientData.studentData.code = text;
  }

  transcribeAudio(audioBlob: Blob) {
    this.isLoadingAudio = true;
    this.changeDetectorRef.detectChanges(); // Manually trigger change detection

    this.backendService.transcribeAudio(audioBlob).subscribe({
      next: (response) => {
        this.zone.run(() => {    // Ensures change detection is triggered
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

  setPromptVoice(voice: PromptOptionSingle) {
    this.clientData.promptData.voice = voice;
  }

  setPromptInstruction(instruction: PromptOptionSingle) {
    this.clientData.promptData.instruction = instruction;
  }

  setPromptGuardrail(guardrail: PromptOptionSingle) {
    this.clientData.promptData.guardrail = guardrail;
  }

  setPromptSummarize(summarize: PromptOptionSingle) {
    this.clientData.promptData.summarize = summarize;
  }

  setPromptCOT(COT: PromptOptionSingle) {
    this.clientData.promptData.COT = COT;
  }

  setPromptExtractor(extractor: PromptOptionSingle) {
    this.clientData.promptData.extractor = extractor;
  }
  
  setTemperatureValue(value: number) {
    this.clientData.promptData.temperature = value;
  }

  generateTextPost() {
    this.clientData.metaData.datetime = new Date();
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
      complete: () => {
        console.info('text generated successfully'),
        this.isLoadingAI = false;
      }
      
    });
  }
}
