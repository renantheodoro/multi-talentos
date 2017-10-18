import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonListagemComponent } from './hackathon-listagem.component';

describe('HackathonListagemComponent', () => {
  let component: HackathonListagemComponent;
  let fixture: ComponentFixture<HackathonListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
