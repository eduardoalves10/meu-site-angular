import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente2 } from './meu-componente-2';

describe('MeuComponente2', () => {
  let component: MeuComponente2;
  let fixture: ComponentFixture<MeuComponente2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente2],
    }).compileComponents();

    fixture = TestBed.createComponent(MeuComponente2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
