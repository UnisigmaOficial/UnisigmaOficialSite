import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PresentationComponent } from './components/presentation/presentation.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationComponent, OurServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnisigmaOficialSite';
}
