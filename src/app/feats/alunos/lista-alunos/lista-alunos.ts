import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alunos',
  imports: [],
  templateUrl: './lista-alunos.html',
  styleUrl: './lista-alunos.css',
})
export class ListaAlunos {
  protected alunos= ['Eduardo', 'Rafael', 'Jordan', 'Gregory', 'Nathan', 'Arthur', 'Benjamim', 'Emerson', 'Henrique']
}
