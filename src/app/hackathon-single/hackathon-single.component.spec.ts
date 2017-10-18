import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonSingleComponent } from './hackathon-single.component';

describe('HackathonSingleComponent', () => {
  let component: HackathonSingleComponent;
  let fixture: ComponentFixture<HackathonSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
