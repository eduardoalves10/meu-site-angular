import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploForm } from './exemplo-form';

describe('ExemploForm', () => {
  let component: ExemploForm;
  let fixture: ComponentFixture<ExemploForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
