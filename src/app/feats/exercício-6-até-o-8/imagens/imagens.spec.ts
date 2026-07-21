import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagens } from './imagens';

describe('Imagens', () => {
  let component: Imagens;
  let fixture: ComponentFixture<Imagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imagens],
    }).compileComponents();

    fixture = TestBed.createComponent(Imagens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
