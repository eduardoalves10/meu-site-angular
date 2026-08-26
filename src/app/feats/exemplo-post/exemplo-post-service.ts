import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { InterfacePost } from './interface-post';
import { InterfacePut } from '../exemplo-put/interface-put';
import { InterfaceDelete } from '../exemplo-delete/interface-delete';
import { PostResponse } from './post-response';

@Service()
export class ExemploPostService {

    // Injeta HttpClient
    private readonly httpClient = inject(HttpClient);

    // Cria uma variável que recebe o endereço (URL) da API
    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';

    // Post da API
    cadastrarPostDoService(postCadastrado: InterfacePost) {
        return this.httpClient.post<PostResponse>(this.urlApi, postCadastrado);
    };

    // Put da API
    atualizarPostDoService(putCadastrado: InterfacePut) {
        return this.httpClient.put(this.urlApi + '/' + putCadastrado.id, putCadastrado);
    };

    // Delete da API
    deletaPostDoService(deleteCadastrado: InterfaceDelete) {
        return this.httpClient.delete(this.urlApi + '/' + deleteCadastrado.id);
    };

} 
