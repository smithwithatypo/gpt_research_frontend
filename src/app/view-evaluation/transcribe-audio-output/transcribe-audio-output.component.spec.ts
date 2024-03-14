import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscribeAudioOutputComponent } from './transcribe-audio-output.component';

describe('TranscribeAudioOutputComponent', () => {
  let component: TranscribeAudioOutputComponent;
  let fixture: ComponentFixture<TranscribeAudioOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranscribeAudioOutputComponent]
    });
    fixture = TestBed.createComponent(TranscribeAudioOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
