import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-contact-forms',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact-forms.component.html',
  styleUrl: './contact-forms.component.css'
})
export class ContactFormsComponent {
  phoneIcon = faPhone;
  mailIcon = faEnvelope;
  whatsAppIcon = faWhatsapp;
  arrowRightIcon = faCaretRight;
}
