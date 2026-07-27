import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponente } from './primeiros-trabalhos-com-angular/meu-componente/meu-componente';
import { MeuComponente2 } from './primeiros-trabalhos-com-angular/meu-componente-2/meu-componente-2';
import { Valores } from './atividades-feitas-junto-com-o-professor-na-sala-de-aula/valores/valores';
import { Introducao } from './exercicios-introdutorios-de-angular-1ate-o-4/introducao/introducao';
import { EnderecoComponent } from './atividades-feitas-junto-com-o-professor-na-sala-de-aula/endereco-component/endereco-component';
import { PessoaComponent } from './exercicios-introdutorios-de-angular-1ate-o-4/pessoa-component/pessoa-component';
import { MercadoComponent } from './exercicios-introdutorios-de-angular-1ate-o-4/mercado-component/mercado-component';
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
