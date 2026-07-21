import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropBinding } from './prop-binding';

describe('PropBinding', () => {
  let component: PropBinding;
  let fixture: ComponentFixture<PropBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(PropBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
