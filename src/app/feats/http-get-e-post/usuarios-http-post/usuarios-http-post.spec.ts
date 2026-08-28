import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosHttpPost } from './usuarios-http-post';

describe('UsuariosHttpPost', () => {
  let component: UsuariosHttpPost;
  let fixture: ComponentFixture<UsuariosHttpPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosHttpPost],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosHttpPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
