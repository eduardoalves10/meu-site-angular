import { Component, inject } from '@angular/core';
import { ServiceGlobal } from '../service-global';

@Component({
  selector: 'app-usuarios-http-get',
  imports: [],
  templateUrl: './usuarios-http-get.html',
  styleUrl: './usuarios-http-get.css',
})
export class UsuariosHttpGet {

  protected readonly serviceGlobal= inject (ServiceGlobal);

  protected recarregarPostsGet() {
    this.serviceGlobal.postsDetailsGet.reload();
  };

}
