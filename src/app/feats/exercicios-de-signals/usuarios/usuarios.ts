import { Component, signal } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  
  protected readonly usuarios= signal <Usuario[]>([

    {
      id: 1,
      nome: 'Eduardo',
      idade: 17
    },

    {
      id: 2,
      nome: 'Gregory',
      idade: 16
    },

    {
      id: 3,
      nome: 'Jordan',
      idade: 21
    },

    {
      id: 4,
      nome: 'Rafael',
      idade: 21
    }
    
  ]);
};
