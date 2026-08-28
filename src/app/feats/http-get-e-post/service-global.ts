import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { InterfaceHttpGet } from './usuarios-http-get/interface-http-get';
import { InterfaceHttpPost } from './usuarios-http-post/interface-http-post';
import { PostRequest } from './usuarios-http-post/post-request';

@Service()
export class ServiceGlobal {

    // Injeta HttpClient
    private readonly httpClient = inject(HttpClient);

    // Passa o link, ou enderço, da API para uma variável 
    private readonly linkApi = 'https://jsonplaceholder.typicode.com/users';

    // Get da API para puxar usuários
    readonly postsDetailsGet = httpResource<InterfaceHttpGet[]>(
        () => this.linkApi,
        { defaultValue: [] }
    );

    // Post da API
    cadastroPostService(postService: InterfaceHttpPost) {
        return this.httpClient.post<PostRequest>(this.linkApi, postService);
    };
}
