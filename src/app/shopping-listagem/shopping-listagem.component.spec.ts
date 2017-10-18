import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListagemComponent } from './shopping-listagem.component';

describe('ShoppingListagemComponent', () => {
  let component: ShoppingListagemComponent;
  let fixture: ComponentFixture<ShoppingListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
