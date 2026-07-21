import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa-component',
  imports: [],
  templateUrl: './pessoa-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './pessoa-component.css',
})
export class PessoaComponent {
  pessoa1: Pessoa = {
    nome: 'Eduardo',
    sexo: 'Masculino',
    dataNascimento: '10/04/2009',
    estadoCivil: 'Solteiro',
  };

  pessoa2: Pessoa = {
    nome: 'Juscelino',
    sexo: 'Masculino',
    dataNascimento: '04/05/1979',
    estadoCivil: 'Casado',
  };

  pessoa3: Pessoa = {
    nome: 'Lucinei',
    sexo: 'Feminino',
    dataNascimento: '27/09/1988',
    estadoCivil: 'Casado',
  };
}
