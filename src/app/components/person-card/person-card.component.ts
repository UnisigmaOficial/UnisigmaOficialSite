import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Person } from './person';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})
export class PersonCardComponent {
  linkedinIcon = faLinkedin;
  @Input() data!: Person;
}
