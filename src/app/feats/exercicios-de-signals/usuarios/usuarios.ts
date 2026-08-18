import { Component, inject, signal } from '@angular/core';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios-service';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

  protected readonly usuariosService= inject(UsuariosService);
  
};
