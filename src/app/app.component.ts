import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PresentationComponent } from './components/presentation/presentation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhoweareComponent } from './components/whoweare/whoweare.component';
import { ValuesComponent } from './components/values/values.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ContactFormsComponent } from './components/contact-forms/contact-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PresentationComponent, OurServicesComponent, ContactFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnisigmaOficialSite';
}
