import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetIDComponent } from './net-id.component';

describe('NetIDComponent', () => {
  let component: NetIDComponent;
  let fixture: ComponentFixture<NetIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetIDComponent]
    });
    fixture = TestBed.createComponent(NetIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
