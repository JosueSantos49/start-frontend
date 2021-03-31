import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteContatoComponent } from './componente-contato.component';

describe('ComponenteContatoComponent', () => {
  let component: ComponenteContatoComponent;
  let fixture: ComponentFixture<ComponenteContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
