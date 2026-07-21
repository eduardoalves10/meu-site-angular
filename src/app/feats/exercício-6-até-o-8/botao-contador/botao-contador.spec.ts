import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoContador } from './botao-contador';

describe('BotaoContador', () => {
  let component: BotaoContador;
  let fixture: ComponentFixture<BotaoContador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoContador],
    }).compileComponents();

    fixture = TestBed.createComponent(BotaoContador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
