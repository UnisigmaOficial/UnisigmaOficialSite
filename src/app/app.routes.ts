import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'portifolio', component: PortifolioComponent
    },
    {
        path: 'contato', component: ContatoComponent
    }
];
