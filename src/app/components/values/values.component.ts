import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css'
})
export class ValuesComponent {
  faStar = faStar;
}
