import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valores } from './valores';

describe('Valores', () => {
  let component: Valores;
  let fixture: ComponentFixture<Valores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Valores],
    }).compileComponents();

    fixture = TestBed.createComponent(Valores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
