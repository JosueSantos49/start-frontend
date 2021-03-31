import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoLeituraComponent } from './contato-leitura.component';

describe('ContatoLeituraComponent', () => {
  let component: ContatoLeituraComponent;
  let fixture: ComponentFixture<ContatoLeituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoLeituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoLeituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
