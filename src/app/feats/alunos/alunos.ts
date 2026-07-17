import { Component } from '@angular/core';
import { ListaAlunos } from "./lista-alunos/lista-alunos";

@Component({
  selector: 'app-alunos',
  imports: [ListaAlunos],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {}
