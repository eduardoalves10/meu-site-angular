import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  protected produtoModel= signal<Produto>({
    titulo: '',
    descricao:'',
    preco: null
  });

  produtoForm= form(this.produtoModel);
  
  cadastrarProduto(event: SubmitEvent) {
    event.preventDefault();

    const produto= this.produtoModel();

    alert("O produto foi cadastrado")

    console.log(produto)

    this.produtoModel.set({
      titulo: '',
      descricao:'',
      preco: null
    })
  };

}
