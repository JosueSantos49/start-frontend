import { TestBed } from '@angular/core/testing';

import { AppServiceContatoService } from './app-service-contato.service';

describe('AppServiceContatoService', () => {
  let service: AppServiceContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServiceContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
