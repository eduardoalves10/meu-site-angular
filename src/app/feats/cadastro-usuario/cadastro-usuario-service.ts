import { Service, signal } from '@angular/core';
import { CadastroInterface } from './cadastro-interface';

@Service()
export class CadastroUsuarioService {

    usuarios = signal<CadastroInterface[]>([]);

    efetuarCadastroUsuario(usuario: CadastroInterface) {
        this.usuarios.update(valor => [...valor, usuario]);
    };
   
}
