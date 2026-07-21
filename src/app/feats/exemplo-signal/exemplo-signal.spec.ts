import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploSignal } from './exemplo-signal';

describe('ExemploSignal', () => {
  let component: ExemploSignal;
  let fixture: ComponentFixture<ExemploSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
