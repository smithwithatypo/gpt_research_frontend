import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLearnContainerComponent } from '../view-learn/view-learn.component';

describe('ViewLearnContainerComponent', () => {
  let component: ViewLearnContainerComponent;
  let fixture: ComponentFixture<ViewLearnContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLearnContainerComponent]
    });
    fixture = TestBed.createComponent(ViewLearnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
