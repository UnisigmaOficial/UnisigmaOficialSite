import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PresentationComponent } from './components/presentation/presentation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ValuesComponent } from './values/values.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactFormsComponent } from './components/contact-forms/contact-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationComponent, OurServicesComponent, ContactFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnisigmaOficialSite';
}
