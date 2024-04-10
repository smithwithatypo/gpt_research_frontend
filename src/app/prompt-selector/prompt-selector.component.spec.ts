import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptSelectorComponent } from './prompt-selector.component';

describe('PromptSelectorComponent', () => {
  let component: PromptSelectorComponent;
  let fixture: ComponentFixture<PromptSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptSelectorComponent]
    });
    fixture = TestBed.createComponent(PromptSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
