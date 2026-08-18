import { Component, inject, signal } from '@angular/core';
import { EstudanteInterface } from './estudante-interface';
import { form, FormField, min, max, required, minLength } from '@angular/forms/signals';
import { CadastroEstudanteService } from './cadastro-estudante-service';

@Component({
  selector: 'app-cadastro-estudante',
  imports: [FormField],
  templateUrl: './cadastro-estudante.html',
  styleUrl: './cadastro-estudante.css',
})
export class CadastroEstudante {

  protected readonly cadastroEstudanteService= inject(CadastroEstudanteService);

  protected cadastroModel = signal<EstudanteInterface>({
    nomeAluno: '',
    mediaFinal: null
  });

  protected estudanteForm = form(this.cadastroModel, (s) => {
    required(s.nomeAluno, { message: 'Nome do aluno(a) é obrigatório' });
    minLength(s.nomeAluno, 3, { message: 'No mínimo duas letras para o nome' });

    required(s.mediaFinal, { message: 'Média final é obrigatória' });
    min(s.mediaFinal, 0, { message: 'Média final no mínimo 0' });
    max(s.mediaFinal, 10, { message: 'Média final no máximo 10' });
  });

  // protected alunos = signal<EstudanteInterface[]>([]);

  protected efetuarCadastro(event: SubmitEvent) {
    event.preventDefault();

    const aluno = this.cadastroModel();

    if (aluno.nomeAluno.length < 2) {
      return
    };

    if (aluno.mediaFinal !== null && aluno.mediaFinal < 0) {
      return
    } else if (aluno.mediaFinal !== null && aluno.mediaFinal > 10) {
      return
    };

    this.cadastroModel.set({
      nomeAluno: '',
      mediaFinal: null
    });

    // this.alunos.update(valor => [...valor, aluno]);

    this.cadastroEstudanteService.efetuarCadastro(aluno);
  };

}
