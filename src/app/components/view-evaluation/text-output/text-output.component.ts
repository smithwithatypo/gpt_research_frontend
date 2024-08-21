import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-output',
  templateUrl: './text-output.component.html',
  styleUrls: ['./text-output.component.sass']
})

export class TextOutputComponent {
  @Input() generatedText: string = '';
  @Input() isLoading: any;

  @Output() requestGenerateText = new EventEmitter<any>();

  constructor() { }

  onGenerateText() {
    this.requestGenerateText.emit();
  }

}
