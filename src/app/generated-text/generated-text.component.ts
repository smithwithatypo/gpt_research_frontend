import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generated-text',
  templateUrl: './generated-text.component.html',
  styleUrls: ['./generated-text.component.sass']
})
export class GeneratedTextComponent {
  @Input() generatedText: string = '';

  constructor() { }



}
