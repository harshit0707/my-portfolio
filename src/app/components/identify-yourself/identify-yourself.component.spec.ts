import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyYourselfComponent } from './identify-yourself.component';

describe('IdentifyYourselfComponent', () => {
  let component: IdentifyYourselfComponent;
  let fixture: ComponentFixture<IdentifyYourselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyYourselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
