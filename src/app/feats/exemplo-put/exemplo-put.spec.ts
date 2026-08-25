import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploPut } from './exemplo-put';

describe('ExemploPut', () => {
  let component: ExemploPut;
  let fixture: ComponentFixture<ExemploPut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploPut],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploPut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
