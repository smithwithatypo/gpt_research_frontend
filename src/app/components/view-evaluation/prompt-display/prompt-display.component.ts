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

  voice: string = "voice"
  instruction: string = "instruction"
  guardrail: string = "guardrail"
  summarize: string = "summarize"
  CoT: string = "CoT"
  extractor: string = "extractor"
}
