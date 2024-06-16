import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'portfolio', component: PortifolioComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'quem-somos', component: QuemSomosComponent }
];
