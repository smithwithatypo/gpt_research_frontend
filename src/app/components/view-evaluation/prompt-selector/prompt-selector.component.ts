import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prompt-selector',
  templateUrl: './prompt-selector.component.html',
  styleUrls: ['./prompt-selector.component.sass']
})
export class PromptSelectorComponent {
  @Input()  promptVoice: any;
  @Output() selectPromptVoice = new EventEmitter<string>();
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

  clickedPerson(voice: string): void {
    this.selectPromptVoice.emit(voice);
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
