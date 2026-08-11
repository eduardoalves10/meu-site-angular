import { Component, signal } from '@angular/core';
import { LoginInterface } from './login-interface';
import { email, form, FormField, min, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-login-signal',
  imports: [FormField],
  templateUrl: './login-signal.html',
  styleUrl: './login-signal.css',
})
export class LoginSignal {

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

  protected estaLogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const login = this.loginModel();

    if (login.email === 'eduardo@gmail.com' && login.senha === '1234567') {
      this.estaLogado.set(true);
    };
  };

}
