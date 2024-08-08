import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-problem-selector',
  templateUrl: './problem-selector.component.html',
  styleUrls: ['./problem-selector.component.sass']
})
export class ProblemSelectorComponent {
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
