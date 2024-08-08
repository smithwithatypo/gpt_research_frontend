import { Component } from '@angular/core';

@Component({
  selector: 'app-prompt-display',
  templateUrl: './prompt-display.component.html',
  styleUrls: ['./prompt-display.component.sass']
})
export class PromptDisplayComponent {

  constructor() { }

  title: string = "System Prompt"
  tooltip: string = "{voice} {instruction} {guardrail} {summarize} {CoT} {extractor}"


}
