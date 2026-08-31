import { Component, inject, signal } from '@angular/core';
import { ServiceGlobal } from '../service-global';
import { InterfaceHttpPost } from './interface-http-post';
import { form, required, FormField, minLength } from '@angular/forms/signals';

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
    minLength(user.name, 2, { message: 'Nome deve ter no mínimo 2 caracteres!' });

    // Nome de usuário
    required(user.username, { message: 'Nome de Usuário é obrigatório!' });
    minLength(user.username, 4, { message: 'Nome de Usuário deve ter no mínimo 4 caracteres!' });

    // Email
    required(user.email, { message: 'Email é obrigatório!' });
    minLength(user.email, 6, { message: 'Email deve ter no mínimo 6 caracteres!' });

    // Telefone/Celular
    required(user.phone, { message: 'Telefone/Celular é obrigatório!' });
    minLength(user.phone, 10, { message: 'Telefone/Celular deve ter no mínimo 10 caracteres!' });
  });

  protected cadastroPost(event: SubmitEvent) {
    event.preventDefault();

    const post = this.postModel();

    if (post.name.length < 2) {
      return;
    };

    if (post.username.length < 4) {
      return;
    };

    if (post.email.length < 6) {
      return;
    };

    if (post.phone.length < 10) {
      return;
    };

    this.serviceGlobal.cadastroPostService(post).subscribe({
      next: (response) => {
        alert('Novo Post cadastrado o com nome de: ' + response.name);

        this.postModel.set({
          name: '',
          username: '',
          email: '',
          phone: ''
        });

        this.postForm().reset();
      },

      error: () => {
        alert('Algo deu errado!');
      }
    });

    this.usuariosPost.update(valor => [...valor, post]);
  };

}
