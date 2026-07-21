import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Mercado } from './mercado';

@Component({
  selector: 'app-mercado-component',
  imports: [],
  templateUrl: './mercado-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './mercado-component.css',
})
export class MercadoComponent {
  unidadeDeBlumenau: Mercado = {
    nomeMercado: 'Cooper',
    macasVendidas: '50',
    precoMacas: '2,50',
    laranjasVendidas: '60',
    precoLaranjas: '3,00',
  };

  unidadeDeJoinvile: Mercado = {
    nomeMercado: 'Giassi',
    macasVendidas: '40',
    precoMacas: '2,40',
    laranjasVendidas: '80',
    precoLaranjas: '3,10',
  };

  unidadeDeFlorianopolis: Mercado = {
    nomeMercado: 'Brasil Atacadista',
    macasVendidas: '90',
    precoMacas: '2,20',
    laranjasVendidas: '70',
    precoLaranjas: '2,90',
  };
}
