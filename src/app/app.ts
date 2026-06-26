import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponente } from './meu-componente/meu-componente';
import { MeuComponente2 } from './meu-componente-2/meu-componente-2';
import { Valores } from './valores/valores';
import { Introducao } from "./introducao/introducao";
import { EnderecoComponent } from "./endereco-component/endereco-component";
import { PessoaComponent } from "./pessoa-component/pessoa-component";
import { MercadoComponent } from "./mercado-component/mercado-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuComponente, MeuComponente2, Valores, Introducao, EnderecoComponent, PessoaComponent, MercadoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('galera');
}