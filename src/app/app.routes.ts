import { Routes } from '@angular/router';
import { Home } from './feats/home/home';
import { Event } from './feats/event/event';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { TwoWayBinding } from './feats/two-way-binding/two-way-binding';
import { Alunos } from './feats/alunos/alunos';
import { BotaoContador } from './feats/exercício-6-até-o-8/botao-contador/botao-contador';
import { LogadoDeslogado } from './feats/exercício-6-até-o-8/logado-deslogado/logado-deslogado';
import { Imagens } from './feats/exercício-6-até-o-8/imagens/imagens';
import { ExemploSignal } from './feats/exemplo-signal/exemplo-signal';
import { Usuarios } from './feats/usuarios/usuarios';

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
    {path: '', redirectTo: 'home', pathMatch: 'full'}

];
