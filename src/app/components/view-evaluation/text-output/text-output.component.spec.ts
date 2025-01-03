import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOutputComponent } from './text-output.component';

describe('TextOutputComponent', () => {
  let component: TextOutputComponent;
  let fixture: ComponentFixture<TextOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextOutputComponent]
    });
    fixture = TestBed.createComponent(TextOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
