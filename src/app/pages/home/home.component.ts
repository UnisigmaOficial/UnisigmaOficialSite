import { Component } from '@angular/core';
import { OurServicesComponent } from '../../components/our-services/our-services.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OurServicesComponent, PresentationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
