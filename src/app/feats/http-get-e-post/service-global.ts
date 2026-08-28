import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { InterfaceHttpGet } from './usuarios-http-get/interface-http-get';

@Service()
export class ServiceGlobal {

    // Injeta HttpClient
    private readonly httpClientGet = inject(HttpClient);

    // Passa o link, ou enderço, da API para uma variável 
    private readonly linkApi = 'https://jsonplaceholder.typicode.com/users';

    // Get da API para puxar usuários
    readonly postsDetailsGet = httpResource<InterfaceHttpGet[]>(
        () => this.linkApi,
        { defaultValue: [] }
    );
}
