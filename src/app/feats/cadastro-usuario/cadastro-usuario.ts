import { Component, signal } from '@angular/core';
import { CadastroInterface } from './cadastro-interface';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.css',
})
export class CadastroUsuario {
  protected usuarioModel= signal<CadastroInterface>({
    nomeCompleto: '',
    email: '',
    senha: '',
    confirmacaoSenha: '',
    dataNascimento: null
  });
}
