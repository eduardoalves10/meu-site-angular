import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignal } from './login-signal';

describe('LoginSignal', () => {
  let component: LoginSignal;
  let fixture: ComponentFixture<LoginSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
