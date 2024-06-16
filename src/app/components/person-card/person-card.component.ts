import { Component, Input } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})
export class PersonCardComponent {
  @Input() data!: Person
}
