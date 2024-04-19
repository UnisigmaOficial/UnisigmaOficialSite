import { Component } from '@angular/core';
import { ContactFormsComponent } from '../../components/contact-forms/contact-forms.component';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ContactFormsComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
