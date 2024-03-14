import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscribeAudioComponent } from './transcribe-audio.component';

describe('TranscribeAudioComponent', () => {
  let component: TranscribeAudioComponent;
  let fixture: ComponentFixture<TranscribeAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranscribeAudioComponent]
    });
    fixture = TestBed.createComponent(TranscribeAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
