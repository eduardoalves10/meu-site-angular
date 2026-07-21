import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exemplo-signal',
  imports: [],
  templateUrl: './exemplo-signal.html',
  styleUrl: './exemplo-signal.css',
})
export class ExemploSignal {

  idade = signal(17);

  mudarValor() {
    this.idade.set(18);
  }

};
