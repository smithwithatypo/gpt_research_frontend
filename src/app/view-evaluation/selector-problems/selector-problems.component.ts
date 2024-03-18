import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector-problems',
  templateUrl: './selector-problems.component.html',
  styleUrls: ['./selector-problems.component.sass']
})
export class SelectorProblemsComponent {
  @Input()  problemSummaries: any;
  @Output() getProblemSummaries = new EventEmitter<any>();
  @Output() getOneProblem = new EventEmitter<number>();

  constructor() { };

  ngOnInit() {
    this.getProblemSummaries.emit();
  }

  clickedProblem(problemID: number) {
    this.getOneProblem.emit(problemID);
  }

}
