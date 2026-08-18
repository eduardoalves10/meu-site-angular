import { Service, signal } from '@angular/core';
import { EstudanteInterface } from './estudante-interface';

@Service()
export class CadastroEstudanteService {

    alunos = signal<EstudanteInterface[]>([]);

    efetuarCadastro(aluno: EstudanteInterface) {
        this.alunos.update(valor => [...valor, aluno]);
    };
    
}
