import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoAtualizarComponent } from './contato-atualizar.component';

describe('ContatoAtualizarComponent', () => {
  let component: ContatoAtualizarComponent;
  let fixture: ComponentFixture<ContatoAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
