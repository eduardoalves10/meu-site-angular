import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaComponent } from './pessoa-component';

describe('PessoaComponent', () => {
  let component: PessoaComponent;
  let fixture: ComponentFixture<PessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PessoaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
