import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { Event } from './feats/event/event';
import { PropBinding } from './feats/prop-binding/prop-binding';
import { TwoWayBinding } from './feats/two-way-binding/two-way-binding';

export const routes: Routes = [

    {path: 'contato', component: Contato},
    {path: 'home', component: Home},
    {path: 'event', component: Event},
    {path: 'prop-binding', component: PropBinding},
    {path: 'two-way-binding', component: TwoWayBinding},
    {path: '', redirectTo: 'home', pathMatch: 'full'}

];