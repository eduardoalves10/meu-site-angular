import { Component } from '@angular/core';

@Component({
  selector: 'app-logado-deslogado',
  imports: [],
  templateUrl: './logado-deslogado.html',
  styleUrl: './logado-deslogado.css',
})
export class LogadoDeslogado {

  protected EstadoLogin="deslogado"

  protected logar(){
    this.EstadoLogin="logado"
  }
  protected deslogar(){
    this.EstadoLogin="deslogado"
  }
  
}
