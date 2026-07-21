import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlunos } from './lista-alunos';

describe('ListaAlunos', () => {
  let component: ListaAlunos;
  let fixture: ComponentFixture<ListaAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAlunos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAlunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
