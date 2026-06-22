import { Component } from '@angular/core';

@Component({
  selector: 'app-introducao',
  imports: [],
  templateUrl: './introducao.html',
  styleUrl: './introducao.css',
})
export class Introducao {
  nome: string = 'Eduardo';
  idade: Number= 17;
  cidade: string= 'Blumenau';
  curso: string= 'Front-end';
}