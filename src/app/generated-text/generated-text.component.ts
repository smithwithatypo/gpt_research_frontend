import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generated-text',
  templateUrl: './generated-text.component.html',
  styleUrls: ['./generated-text.component.sass']
})
export class GeneratedTextComponent {
  @Input() generatedText: string = '';
  @Output() requestGenerateText = new EventEmitter<any>();

  constructor() { }

  onGenerateText() {
    this.requestGenerateText.emit();
  }


}
