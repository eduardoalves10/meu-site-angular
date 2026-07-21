import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {

  protected texto: string= '';

  protected aoDigitar() {
    console.log("O usuário digitou")
  };

  protected nome: string= "";

  protected nota: number=0;

};
