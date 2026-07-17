import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-contador',
  imports: [],
  templateUrl: './botao-contador.html',
  styleUrl: './botao-contador.css',
})
export class BotaoContador {

  contador: number=0;

  adicionarMaisUm() {
    this.contador ++
  }

  resetContador () {
    this.contador= 0
  }
}
