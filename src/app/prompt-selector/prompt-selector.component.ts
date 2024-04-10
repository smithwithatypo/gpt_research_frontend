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
  persons: string[] = ['Professor', 'Mentor', 'Interviewer'];
  // selectedOption: string = 'Professor';
  // slider_value: number = 1;


  clickedPerson(person: string): void {
    // this.selectedOption = option;
    this.selectPromptPerson.emit(person);
  }

  clickedDifficulty(value: any) {
    // this.slider_value = value;
    this.selectDifficultyValue.emit(value);
  }

}
