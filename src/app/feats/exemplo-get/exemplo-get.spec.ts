import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploGet } from './exemplo-get';

describe('ExemploGet', () => {
  let component: ExemploGet;
  let fixture: ComponentFixture<ExemploGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploGet],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploGet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
