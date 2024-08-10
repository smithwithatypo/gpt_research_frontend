import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prompt-selector',
  templateUrl: './prompt-selector.component.html',
  styleUrls: ['./prompt-selector.component.sass']
})
export class PromptSelectorComponent {
  @Input() promptVoice: any;
  @Input() promptInstruction: any;
  @Input() promptGuardrail: any;
  @Input() promptSummarize: any;
  @Input() promptCOT: any;
  @Input() promptExtractor: any;

  @Output() selectPromptVoice = new EventEmitter<string>();
  @Output() selectPromptInstruction = new EventEmitter<string>();
  @Output() selectGuardrailValue = new EventEmitter<string>();
  @Output() selectPromptSummarize = new EventEmitter<string>();
  @Output() selectPromptCOT = new EventEmitter<string>();
  @Output() selectPromptExtractor = new EventEmitter<string>();
  @Output() selectTemperatureValue = new EventEmitter<number>();


  // @Output() selectDifficultyValue = new EventEmitter<number>();
  // @Output() selectModelValue = new EventEmitter<string>();

  // persons: string[] = ['Professor', 'Mentor', 'Interviewer', 'Child'];
  // modelSelection: string = '4';

  voices: string[] = ['professor', 'student']
  instructions: string[] = ['no logic gaps', 'u', 'm', 'p']
  guardrails: string[] = ['give answer', "don't give answer"]
  summarizes: string[] = ['summarize', "don't summarize"]
  COTs: string[] = ['step by step', 'explain reasoning']
  extractors: string[] = ['likert scale', 'binary', '1-5', '1-10']

  clickedVoice(voice: string): void {
    this.selectPromptVoice.emit(voice);
  }

  clickedInstruction(instruction: string) {
    this.selectPromptInstruction.emit(instruction);
  }
  
  clickedGuardrail(value: string) {
    this.selectGuardrailValue.emit(value);
  }
  
  clickedSummarize(summarize: string) {
    this.selectPromptSummarize.emit(summarize);
  }

  clickedCOT(COT: string) {
    this.selectPromptCOT.emit(COT);
  }

  clickedExtractor(extractor: string) {
    this.selectPromptExtractor.emit(extractor);
  }
  
  clickedTemperature(value: string) {
    this.selectTemperatureValue.emit(Number(value));
  }


  // clickedDifficulty(value: string) {
  //   this.selectDifficultyValue.emit(Number(value));
  // }


  // modelSelectionChanged() {
  //   this.selectModelValue.emit(this.modelSelection);
  // }

}
