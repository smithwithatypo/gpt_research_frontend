import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-quick-question',
  templateUrl: './quick-question.component.html',
  styleUrls: ['./quick-question.component.sass'],
})
export class QuickQuestionComponent {
  // init variables
  gpt_form: FormGroup;
  response_data: any[] = [];
  searchQuery: string = '';

  // constructor
  constructor(private httpService: HttpService) {
    this.gpt_form = new FormGroup({
      button_choice: new FormControl(''),
      topic: new FormControl(''),
      question: new FormControl(''),
    });
  }

  onAIClick(choice: string) {
    return choice; // for testing
    // this.gpt_form.value.button_choice = choice;
    // console.log(this.gpt_form.value);
    // this.httpService.postGenerate(this.gpt_form.value).subscribe((data) => {
    //   this.response_data = data;
    //   console.log(this.response_data);
    // });
  }

  onSearchClick() {
    this.searchQuery = `${this.gpt_form.value.topic} ${this.gpt_form.value.question}`;
    const query = encodeURIComponent(this.searchQuery);
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, '_blank');
  }

  onClearQuestion() {
    this.gpt_form.get('question')?.reset();
  }
}
