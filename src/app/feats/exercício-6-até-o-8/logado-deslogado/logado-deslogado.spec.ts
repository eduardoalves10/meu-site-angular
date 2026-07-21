import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogadoDeslogado } from './logado-deslogado';

describe('LogadoDeslogado', () => {
  let component: LogadoDeslogado;
  let fixture: ComponentFixture<LogadoDeslogado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogadoDeslogado],
    }).compileComponents();

    fixture = TestBed.createComponent(LogadoDeslogado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
