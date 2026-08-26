import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploDelete } from './exemplo-delete';

describe('ExemploDelete', () => {
  let component: ExemploDelete;
  let fixture: ComponentFixture<ExemploDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
