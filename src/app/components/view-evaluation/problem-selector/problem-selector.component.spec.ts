import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSelectorComponent } from './problem-selector.component';

describe('ProblemSelectorComponent', () => {
  let component: ProblemSelectorComponent;
  let fixture: ComponentFixture<ProblemSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemSelectorComponent]
    });
    fixture = TestBed.createComponent(ProblemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
