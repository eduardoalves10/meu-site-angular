import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-valores',
  imports: [],
  templateUrl: './valores.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './valores.css',
})
export class Valores {
  modelo: string = 'Honda Civic';
  preco: number = 50000;
  disponivel: boolean = true;
}
