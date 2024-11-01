import { Component, Output, Input, EventEmitter } from '@angular/core';
import { PromptOptionSingle } from 'src/app/models/promptOptionSingle';

@Component({
  selector: 'app-prompt-selector',
  templateUrl: './prompt-selector.component.html',
  styleUrls: ['./prompt-selector.component.sass']
})

export class PromptSelectorComponent {

  constructor () { };

  // @Output() toggleTextInputEvent = new EventEmitter<boolean>();

  // showTextInput = false;
  // saved = false;
  // userPrompt: string = '';

  // saveText() {
  //   this.saved = true;
  // }

  @Input() promptOptions: any;
  @Input() promptVoice: any;
  @Input() promptInstruction: any;
  @Input() promptGuardrail: any;
  @Input() promptSummarize: any;
  @Input() promptCOT: any;
  @Input() promptExtractor: any;

  @Output() selectPromptVoice = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptInstruction = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptGuardrail = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptSummarize = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptCOT = new EventEmitter<PromptOptionSingle>();
  @Output() selectPromptExtractor = new EventEmitter<PromptOptionSingle>();
  @Output() selectTemperatureValue = new EventEmitter<number>();

  temperatureTooltip = 'randomness from low --> high';

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
