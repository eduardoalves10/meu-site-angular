import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponente } from './meu-componente/meu-componente';
import { MeuComponente2 } from './meu-componente-2/meu-componente-2';
import { Valores } from './valores/valores';
import { Introducao } from './introducao/introducao';
import { EnderecoComponent } from './endereco-component/endereco-component';
import { PessoaComponent } from './pessoa-component/pessoa-component';
import { MercadoComponent } from './mercado-component/mercado-component';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Main,
    Footer,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Oi');
}
