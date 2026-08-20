import { Component, inject, signal } from '@angular/core';
import { LoginInterface } from './login-interface';
import { email, form, FormField, min, minLength, required } from '@angular/forms/signals';
import { LoginSignalService } from './login-signal-service';

@Component({
  selector: 'app-login-signal',
  imports: [FormField],
  templateUrl: './login-signal.html',
  styleUrl: './login-signal.css',
})
export class LoginSignal {

  protected readonly loginSignalService = inject(LoginSignalService);

  protected loginModel = signal<LoginInterface>({
    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel, (s) => {
    required(s.email, { message: 'Email é obrigatório' });
    email(s.email, { message: 'Email não correspondente' });

    required(s.senha, { message: 'Senha é obrigatória' });
    minLength(s.senha, 6, { message: 'Senha deve ter 6 digítos' });
  });

  estaLogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const usuario = this.loginModel();

    this.estaLogado.set(this.loginSignalService.validarEduardo(usuario));

    // const logou = this.loginSignalService.efetuarLogin(login);

    // if (logou === true) {
    //   this.estaLogado.set(true);
    // } else {
    //   this.estaLogado.set(false);
    // };

    this.loginModel.set({
      email: '',
      senha: ''
    });

    this.loginForm().reset();
  };

}
