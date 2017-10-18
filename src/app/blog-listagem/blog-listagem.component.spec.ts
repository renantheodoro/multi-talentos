import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListagemComponent } from './blog-listagem.component';

describe('BlogListagemComponent', () => {
  let component: BlogListagemComponent;
  let fixture: ComponentFixture<BlogListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
