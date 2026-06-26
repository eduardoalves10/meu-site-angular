import { Component } from '@angular/core';
import { Endereco } from './endereco';

@Component({
  selector: 'app-endereco-component',
  imports: [],
  templateUrl: './endereco-component.html',
  styleUrl: './endereco-component.css',
})

export class EnderecoComponent {
  senai: Endereco = {
    cep: '89030000',
    estado: 'Santa Catarina',
    cidade: 'Blumenau',
    bairro: 'Victor Konder',
    rua: 'São Paulo',
    numero: '10'
  };
};