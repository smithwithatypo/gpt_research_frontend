import { Component, Input } from '@angular/core';
import { PromptOptionSingle } from 'src/app/models/promptOptionSingle';

@Component({
  selector: 'app-prompt-display',
  templateUrl: './prompt-display.component.html',
  styleUrls: ['./prompt-display.component.sass']
})
export class PromptDisplayComponent {

  constructor() { }
  @Input() promptVoice: any;
  @Input() promptInstruction: any;
  @Input() promptGuardrail: any;
  @Input() promptSummarize: any;
  @Input() promptCOT: any;
  @Input() promptExtractor: any;

  title: string = "System Prompt"
  tooltip: string = "{voice} {instruction} {guardrail} {summarize} {CoT} {extractor}"
}
