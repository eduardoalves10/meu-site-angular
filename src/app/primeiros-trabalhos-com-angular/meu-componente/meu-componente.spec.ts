import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente } from './meu-componente';

describe('MeuComponente', () => {
  let component: MeuComponente;
  let fixture: ComponentFixture<MeuComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(MeuComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
