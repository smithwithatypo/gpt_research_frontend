import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEvaluationContainerComponent } from './view-evaluation-container.component';

describe('ViewEvaluationContainerComponent', () => {
  let component: ViewEvaluationContainerComponent;
  let fixture: ComponentFixture<ViewEvaluationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEvaluationContainerComponent]
    });
    fixture = TestBed.createComponent(ViewEvaluationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
