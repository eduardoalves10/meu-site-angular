import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosHttpGet } from './usuarios-http-get';

describe('UsuariosHttpGet', () => {
  let component: UsuariosHttpGet;
  let fixture: ComponentFixture<UsuariosHttpGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosHttpGet],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosHttpGet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
