import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-botao-contador',
  imports: [],
  templateUrl: './botao-contador.html',
  styleUrl: './botao-contador.css',
})
export class BotaoContador {

  protected contador= signal <number>(0);

  protected limiteImposto = signal(15);

  protected adicionarMaisUm() {
    this.contador.update(valorAtual => valorAtual +1);
    this. checarValor();
  };

  protected checarValor() {
    if (this.contador() > this.limiteImposto()) {
      this.contador.set(0);
    };
  };

  protected resetContador () {
    this.contador.set(0);
  };
};
