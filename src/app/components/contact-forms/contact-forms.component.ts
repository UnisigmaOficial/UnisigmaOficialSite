import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact-forms',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact-forms.component.html',
  styleUrl: './contact-forms.component.css'
})
export class ContactFormsComponent {
  faPhone = faPhone;
  faLocation = faLocationDot;
  faMail = faEnvelope;
}
