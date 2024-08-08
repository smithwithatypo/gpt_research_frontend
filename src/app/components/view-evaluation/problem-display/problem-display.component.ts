import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-problem-display',
  templateUrl: './problem-display.component.html',
  styleUrls: ['./problem-display.component.sass']
})
export class ProblemDisplayComponent {
  @Input() oneProblemData: any;

}
