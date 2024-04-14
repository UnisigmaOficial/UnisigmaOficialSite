import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PresentationComponent } from './components/presentation/presentation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { ValuesComponent } from './values/values.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UnisigmaOficialSite';
}