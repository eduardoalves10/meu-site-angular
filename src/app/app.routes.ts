import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { Event } from './feats/event/event';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { TwoWayBinding } from './feats/two-way-binding/two-way-binding';
import { Alunos } from './feats/alunos/alunos';
import { BotaoContador } from './feats/botao-contador/botao-contador';

export const routes: Routes = [

    {path: 'contato', component: Contato},
    {path: 'home', component: Home},
    {path: 'event', component: Event},
    {path: 'prop-binding', component: PropBinding},
    {path: 'two-way-binding', component: TwoWayBinding},
    {path: 'alunos', component: Alunos},
    {path: 'botao-contador', component: BotaoContador},
    {path: '', redirectTo: 'home', pathMatch: 'full'}

];