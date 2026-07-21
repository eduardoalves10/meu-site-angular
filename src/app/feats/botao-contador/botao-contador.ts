import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-contador',
  imports: [],
  templateUrl: './botao-contador.html',
  styleUrl: './botao-contador.css',
})
export class BotaoContador {

  protected contador: number= 0;

  protected limiteImposto = 10;

  protected adicionarMaisUm() {
    this.contador ++;
    this. checarValor();
  };

  protected checarValor() {
    if (this.contador > this.limiteImposto) {
      this.contador = 0;
    };
  };

  protected resetContador () {
    this.contador= 0;
  };
};
