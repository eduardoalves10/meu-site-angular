import { Component, inject, signal } from '@angular/core';
import { InterfacePost } from './interface-post';
import { form, required, FormField } from '@angular/forms/signals';
import { ExemploPostService } from './exemplo-post-service';
import { Usuarios } from '../exercicios-de-signals/usuarios/usuarios';

@Component({
  selector: 'app-exemplo-post',
  imports: [FormField],
  templateUrl: './exemplo-post.html',
  styleUrl: './exemplo-post.css',
})
export class ExemploPost {

  protected readonly exemploPostService = inject(ExemploPostService);

  protected postModel = signal<InterfacePost>({
    userId: null,
    title: '',
    body: ''
  });

  usuarios = signal<InterfacePost[]>([]);

  protected postForm = form(this.postModel, (user) => {

    // ID de usuario
    required(user.userId, { message: 'ID é obrigatório' });

    // Title
    required(user.title, { message: 'Title é obrigatório' });

    // Body
    required(user.body, { message: 'Body é obrigatório' });

  });

  protected cadastroUsuario(event: SubmitEvent) {
    event.preventDefault();

    const usuario = this.postModel();

    this.postModel.set({
      userId: null,
      title: '',
      body: ''
    });

    this.usuarios.update(valor => [...valor, usuario]);

    this.postForm().reset();
  };

}
