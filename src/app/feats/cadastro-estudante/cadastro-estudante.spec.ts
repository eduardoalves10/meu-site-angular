import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEstudante } from './cadastro-estudante';

describe('CadastroEstudante', () => {
  let component: CadastroEstudante;
  let fixture: ComponentFixture<CadastroEstudante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEstudante],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEstudante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
