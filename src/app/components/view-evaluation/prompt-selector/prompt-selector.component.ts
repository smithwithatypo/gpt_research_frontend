import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { PromptOptionSingle } from 'src/app/models/promptOptionSingle';

@Component({
  selector: 'app-prompt-selector',
  templateUrl: './prompt-selector.component.html',
  styleUrls: ['./prompt-selector.component.sass']
})

export class PromptSelectorComponent implements OnInit {

  constructor () { };

  ngOnInit(): void {
    // this.initialized.emit();
  }

  @Input() promptOptions: any;
  @Input() promptVoice: any;
  @Input() promptInstruction: any;
  @Input() promptGuardrail: any;
  @Input() promptSummarize: any;
  @Input() promptCOT: any;
  @Input() promptExtractor: any;

  // @Output() initialized = new EventEmitter<void>();
  @Output() selectPromptVoice = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptInstruction = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptGuardrail = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptSummarize = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptCOT = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptExtractor = new EventEmitter<PromptOptionSingle>();
  @Output() selectTemperatureValue = new EventEmitter<number>();

  clickedVoice(voice: PromptOptionSingle): void {
    this.selectPromptVoice.emit(voice);
  }

  clickedInstruction(instruction: PromptOptionSingle) {
    this.selectPromptInstruction.emit(instruction);
  }
  
  clickedGuardrail(guardrail: PromptOptionSingle) {
    this.selectPromptGuardrail.emit(guardrail);
  }
  
  clickedSummarize(summarize: PromptOptionSingle) {
    this.selectPromptSummarize.emit(summarize);
  }

  clickedCOT(COT: PromptOptionSingle) {
    this.selectPromptCOT.emit(COT);
  }

  clickedExtractor(extractor: PromptOptionSingle) {
    this.selectPromptExtractor.emit(extractor);
  }
  
  clickedTemperature(value: string) {
    this.selectTemperatureValue.emit(Number(value));
  }
}
