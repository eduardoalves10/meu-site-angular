import { Component, inject, signal } from '@angular/core';
import { CadastroInterface } from './cadastro-interface';
import { form, required, FormField, min, minLength, email, maxLength } from '@angular/forms/signals';
import { CadastroUsuarioService } from './cadastro-usuario-service';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [FormField],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.css',
})
export class CadastroUsuario {

  protected readonly cadastroUsuarioService= inject(CadastroUsuarioService); 

  protected usuarioModel = signal<CadastroInterface>({
    nomeCompleto: '',
    email: '',
    dataNascimento: '',
    senha: '',
    confirmacaoSenha: ''
  });

  protected dataMaxima = new Date().toISOString().split('T')[0];

  protected usuarioForm = form(this.usuarioModel, (s) => {

    // Instância do nome completo
    required(s.nomeCompleto, { message: 'Nome completo é obrigatório' });
    minLength(s.nomeCompleto, 2, { message: 'No minímo 2 letras para nome completo' });

    // Instância do email
    required(s.email, { message: 'Email é obrigatório' });
    email(s.email, { message: 'Email deve ser válido' });

    // Instância da data de nascimento
    required(s.dataNascimento, { message: 'Data de nascimento é obrigatório' });

    // Instância da senha
    required(s.senha, { message: 'Senha é obrigatório' });
    minLength(s.senha, 6, { message: 'No mínimo 6 caracteres' });

    // Instância da confirmação da senha
    required(s.confirmacaoSenha, { message: 'Confirmação de senha é obrigatório' });
    minLength(s.confirmacaoSenha, 6, { message: 'No mínimo 6 caracteres' });
  });

  // protected usuarios = signal<CadastroInterface[]>([]);

  protected efetuarCadastroUsuario(event: SubmitEvent) {
    event.preventDefault();

    const usuario = this.usuarioModel();

    if (usuario.nomeCompleto.length < 2) {
      return
    };

    if (usuario.senha !== usuario.confirmacaoSenha) {
      return
    };

    console.log(usuario);

    this.usuarioModel.set({
      nomeCompleto: '',
      email: '',
      dataNascimento: '',
      senha: '',
      confirmacaoSenha: ''
    });

    // this.usuarios.update(usuarios => [...usuarios, usuario]);

    this.cadastroUsuarioService.efetuarCadastroUsuario(usuario);

    this.usuarioForm().reset();
  };
}
