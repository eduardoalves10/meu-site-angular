import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { InterfacePost } from './interface-post';

@Service()
export class ExemploPostService {

    // Injeta HttpClient
    private readonly httpClient = inject(HttpClient);

    // Cria uma variável que recebe o endereço (URL) da API
    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';

    // Post da API
    cadastrarPostDoService(postCadastrado: InterfacePost) {
        return this.httpClient.post(this.urlApi, postCadastrado);
    };

} 
