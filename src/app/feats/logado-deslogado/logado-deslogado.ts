import { Component } from '@angular/core';

@Component({
  selector: 'app-logado-deslogado',
  imports: [],
  templateUrl: './logado-deslogado.html',
  styleUrl: './logado-deslogado.css',
})
export class LogadoDeslogado {

  EstadoLogin="deslogado"

  logar(){
    this.EstadoLogin="logado"
  }
  deslogar(){
    this.EstadoLogin="deslogado"
  }
  
}
