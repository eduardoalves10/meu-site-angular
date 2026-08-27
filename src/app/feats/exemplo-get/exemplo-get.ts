import { Component, inject } from '@angular/core';
import { ExemploPostService } from '../exemplo-post/exemplo-post-service';

@Component({
  selector: 'app-exemplo-get',
  imports: [],
  templateUrl: './exemplo-get.html',
  styleUrl: './exemplo-get.css',
})
export class ExemploGet {

  protected readonly consumoService = inject(ExemploPostService);

}
