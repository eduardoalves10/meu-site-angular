import { Service, signal } from '@angular/core';
import { Produto } from './produto';

@Service()
export class FormularioService {

    produtos = signal <Produto[]>([]);

    cadastrarProduto(produto: Produto) {
        this.produtos.update(valor => [...valor, produto]); 
    };

}
