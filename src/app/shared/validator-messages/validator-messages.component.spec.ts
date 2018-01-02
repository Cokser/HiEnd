import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorMessagesComponent } from './validator-messages.component';

describe('ValidatorMessagesComponent', () => {
  let component: ValidatorMessagesComponent;
  let fixture: ComponentFixture<ValidatorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
