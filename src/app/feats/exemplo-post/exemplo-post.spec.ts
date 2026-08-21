import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploPost } from './exemplo-post';

describe('ExemploPost', () => {
  let component: ExemploPost;
  let fixture: ComponentFixture<ExemploPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploPost],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
