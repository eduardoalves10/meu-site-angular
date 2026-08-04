import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exemplo-signal',
  imports: [],
  templateUrl: './exemplo-signal.html',
  styleUrl: './exemplo-signal.css',
})
export class ExemploSignal {

  protected idade = signal(17);

  protected mudarValor() {
    this.idade.set(18);
  };

  protected incrementarIdade () {
    this.idade.update(current => current + 1);
  };

};
