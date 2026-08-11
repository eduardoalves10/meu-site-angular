import { Component, signal } from '@angular/core';
import { EstudanteInterface } from './estudante-interface';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-cadastro-estudante',
  imports: [FormField],
  templateUrl: './cadastro-estudante.html',
  styleUrl: './cadastro-estudante.css',
})
export class CadastroEstudante {

  protected cadastroModel= signal<EstudanteInterface>({
    nomeAluno: '',
    mediaFinal: null
  });

  protected estudanteForm= form(this.cadastroModel, (s) => {
    required(s.nomeAluno, {message: 'Nome do aluno(a) é obrigatório'});

    required(s.mediaFinal, {message: 'Média final é obrigatória'});
  });

  protected efetuarCadastro(event: SubmitEvent) {
    event.preventDefault();
  };
}
