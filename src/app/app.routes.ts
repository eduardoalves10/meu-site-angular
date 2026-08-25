import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { Event } from './feats/exemplos-feitos-na-sala-de-aula/event/event';
import { PropBinding } from './feats/exemplos-feitos-na-sala-de-aula/prop-binding/prop-binding';
import { TwoWayBinding } from './feats/exemplos-feitos-na-sala-de-aula/two-way-binding/two-way-binding';
import { Alunos } from './feats/exemplos-feitos-na-sala-de-aula/alunos/alunos';
import { BotaoContador } from './feats/exercício-6-até-o-8/botao-contador/botao-contador';
import { LogadoDeslogado } from './feats/exercício-6-até-o-8/logado-deslogado/logado-deslogado';
import { Imagens } from './feats/exercício-6-até-o-8/imagens/imagens';
import { ExemploSignal } from './feats/exemplo-signal/exemplo-signal';
import { Usuarios } from './feats/exercicios-de-signals/usuarios/usuarios';
import { Formulario } from './feats/exemplo-form/formulario/formulario';
import { LoginSignal } from './feats/login-signal/login-signal';
import { CadastroEstudante } from './feats/cadastro-estudante/cadastro-estudante';
import { CadastroUsuario } from './feats/cadastro-usuario/cadastro-usuario';
import { ExemploPost } from './feats/exemplo-post/exemplo-post';
import { ExemploPut } from './feats/exemplo-put/exemplo-put';

export const routes: Routes = [

    {path: 'home', component: Home},
    {path: 'event', component: Event},
    {path: 'prop-binding', component: PropBinding},
    {path: 'two-way-binding', component: TwoWayBinding},
    {path: 'alunos', component: Alunos},
    {path: 'botao-contador', component: BotaoContador},
    {path: 'logado-deslogado', component: LogadoDeslogado},
    {path: 'imagens', component: Imagens},
    {path: 'exemplo-signal', component: ExemploSignal},
    {path: 'usuarios', component: Usuarios},
    {path: 'formulario', component: Formulario},
    {path: 'login-signal', component: LoginSignal},
    {path: 'cadastro-estudante', component: CadastroEstudante},
    {path: 'cadastro-usuario', component: CadastroUsuario},
    {path: 'exemplo-post', component: ExemploPost},
    {path: 'exemplo-put', component: ExemploPut},
    {path: '', redirectTo: 'home', pathMatch: 'full'}

];
