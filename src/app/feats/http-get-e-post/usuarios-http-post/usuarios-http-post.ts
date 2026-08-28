import { Component, inject, signal } from '@angular/core';
import { ServiceGlobal } from '../service-global';
import { InterfaceHttpPost } from './interface-http-post';
import { form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-usuarios-http-post',
  imports: [FormField],
  templateUrl: './usuarios-http-post.html',
  styleUrl: './usuarios-http-post.css',
})
export class UsuariosHttpPost {

  protected readonly serviceGlobal = inject(ServiceGlobal);

  protected postModel = signal<InterfaceHttpPost>({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  protected usuariosPost = signal<InterfaceHttpPost[]>([]);

  protected postForm = form(this.postModel, (user) => {

    // Nome
    required(user.name, { message: 'Nome é obrigatório!' });

    // Nome de usuário
    required(user.username, { message: 'Nome de Usuário é obrigatório!' });

    // Email
    required(user.email, { message: 'Email é obrigatório!' });

    // Telefone
    required(user.phone, { message: 'Telefone é obrigatório!' });
  });

  protected cadastroPost(event: SubmitEvent) {
    event.preventDefault();

    const post = this.postModel();

    this.serviceGlobal.cadastroPostService(post).subscribe({
      next: (response) => {
        alert ('Post cadastrado com nome:' + response.name);

        this.postModel.set({
          name: '',
          username: '',
          email: '',
          phone: ''
        });

        this.postForm().reset();
      },

      error: () => {
        alert ('Algo deu errado!');
      }
    });

    this.usuariosPost.update(valor => [...valor, post]);
  };

}
