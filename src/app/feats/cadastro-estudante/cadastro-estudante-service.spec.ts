import { TestBed } from '@angular/core/testing';

import { CadastroEstudanteService } from './cadastro-estudante-service';

describe('CadastroEstudanteService', () => {
  let service: CadastroEstudanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroEstudanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
