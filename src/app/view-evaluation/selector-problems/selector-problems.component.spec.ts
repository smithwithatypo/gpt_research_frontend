import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorProblemsComponent } from './selector-problems.component';

describe('SelectorProblemsComponent', () => {
  let component: SelectorProblemsComponent;
  let fixture: ComponentFixture<SelectorProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorProblemsComponent]
    });
    fixture = TestBed.createComponent(SelectorProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
