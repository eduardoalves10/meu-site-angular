import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBinding } from './two-way-binding';

describe('TwoWayBinding', () => {
  let component: TwoWayBinding;
  let fixture: ComponentFixture<TwoWayBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
