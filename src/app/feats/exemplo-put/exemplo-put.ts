import { Component, inject, signal } from '@angular/core';
import { ExemploPostService } from '../exemplo-post/exemplo-post-service';
import { InterfacePut } from './interface-put';
import { form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-exemplo-put',
  imports: [FormField],
  templateUrl: './exemplo-put.html',
  styleUrl: './exemplo-put.css',
})
export class ExemploPut {

  protected readonly exemploPostService = inject(ExemploPostService);

  protected putModel = signal<InterfacePut>({
    id: null,
    userId: null,
    title: '',
    body: ''
  });

  protected usuarios = signal<InterfacePut[]>([]);

  protected putForm = form(this.putModel, (user) => {

    // ID de usuario
    required(user.id, { message: 'ID é obrigatório' });
    
    // UserID de usuario
    required(user.userId, { message: 'ID é obrigatório' });

    // Title
    required(user.title, { message: 'Title é obrigatório' });

    // Body
    required(user.body, { message: 'Body é obrigatório' });

  });

  protected cadastroUsuario(event: SubmitEvent) {
    event.preventDefault();

    const post = this.putModel();

    this.exemploPostService.cadastrarPostDoService(post).subscribe({

      next: () => {
        alert ('Post cadastrado!');

        this.putModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        });

        this.putForm().reset();
      },
       
      error: () => {

        alert ('Algo deu errado!');
      }
    });

    this.usuarios.update(valor => [...valor, post]);

  };
}
