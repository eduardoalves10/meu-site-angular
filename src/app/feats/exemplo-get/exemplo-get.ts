import { Component, inject, signal } from '@angular/core';
import { ExemploPostService } from '../exemplo-post/exemplo-post-service';
import { form, FormField } from "@angular/forms/signals";

@Component({
  selector: 'app-exemplo-get',
  imports: [FormField],
  templateUrl: './exemplo-get.html',
  styleUrl: './exemplo-get.css',
})
export class ExemploGet {

  protected readonly consumoService = inject(ExemploPostService);

  protected recarregarPosts() {
    this.consumoService.postsDetails.reload();
  };

  protected readonly pesquisaModel = signal<string>('');

  protected readonly pesquisaForm = form(this.pesquisaModel);

  protected filtrarPosts(event: SubmitEvent) {
    event.preventDefault();

    this.consumoService.userId.set(this.pesquisaModel());
  };

}
