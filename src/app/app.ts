import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponente } from './meu-componente/meu-componente';
import { MeuComponente2 } from './meu-componente-2/meu-componente-2';
import { Valores } from './valores/valores';
import { Teste } from "./teste/teste";
import { Introducao } from "./introducao/introducao";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuComponente, MeuComponente2, Valores, Teste, Introducao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('galera');
}