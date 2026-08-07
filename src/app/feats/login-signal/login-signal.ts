import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login-signal',
  imports: [],
  templateUrl: './login-signal.html',
  styleUrl: './login-signal.css',
})
export class LoginSignal {

  protected estadoLogin= signal<string>('logado');
}
