import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSingleComponent } from './shopping-single.component';

describe('ShoppingSingleComponent', () => {
  let component: ShoppingSingleComponent;
  let fixture: ComponentFixture<ShoppingSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
