import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prompt-selector',
  templateUrl: './prompt-selector.component.html',
  styleUrls: ['./prompt-selector.component.sass']
})
export class PromptSelectorComponent {
  @Input() promptPerson: any;
  @Output() selectPromptPerson = new EventEmitter<string>();
  @Output() selectDifficultyValue = new EventEmitter<number>();
  @Output() selectTemperatureValue = new EventEmitter<number>();
  @Output() selectModelValue = new EventEmitter<string>();

  persons: string[] = ['Professor', 'Mentor', 'Interviewer', 'Child'];
  modelSelection: string = '4';


  clickedPerson(person: string): void {
    this.selectPromptPerson.emit(person);
  }

  clickedDifficulty(value: string) {
    this.selectDifficultyValue.emit(Number(value));
  }

  clickedTemperature(value: string) {
    this.selectTemperatureValue.emit(Number(value));
  }

  modelSelectionChanged() {
    this.selectModelValue.emit(this.modelSelection);
  }

}
