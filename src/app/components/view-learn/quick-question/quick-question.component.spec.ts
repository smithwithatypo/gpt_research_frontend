import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickQuestionComponent } from './quick-question.component';

describe('QuickQuestionComponent', () => {
  let component: QuickQuestionComponent;
  let fixture: ComponentFixture<QuickQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickQuestionComponent]
    });
    fixture = TestBed.createComponent(QuickQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
