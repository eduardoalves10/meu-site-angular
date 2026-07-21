import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-logado-deslogado',
  imports: [],
  templateUrl: './logado-deslogado.html',
  styleUrl: './logado-deslogado.css',
})
export class LogadoDeslogado {

  protected EstadoLogin= signal("deslogado");

  protected logar(){
    this.EstadoLogin.set("logado");
  };
  protected deslogar(){
    this.EstadoLogin.set("deslogado");
  };
  
};
