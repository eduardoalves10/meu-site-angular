import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introducao } from './introducao';

describe('Introducao', () => {
  let component: Introducao;
  let fixture: ComponentFixture<Introducao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introducao],
    }).compileComponents();

    fixture = TestBed.createComponent(Introducao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
