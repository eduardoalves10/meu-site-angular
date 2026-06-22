import { Component } from '@angular/core';

@Component({
  selector: 'app-valores',
  imports: [],
  templateUrl: './valores.html',
  styleUrl: './valores.css',
})
export class Valores {
  modelo: string = 'Honda Civic';
  preco: number = 50000;
  disponivel: boolean = true;
}