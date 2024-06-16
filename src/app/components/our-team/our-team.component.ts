import { Component } from '@angular/core';

import { PersonCardComponent } from '../person-card/person-card.component';
import { Person } from '../person-card/person';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [PersonCardComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
  team: Person[] = [
    {
      name: 'Gisele Silva',
      office: 'Presidente Executiva',
      linkedinUrl: '',
      photo: './assets/gisele.png'
    },
    {
      name: 'Sophia Tomei',
      office: 'Diretor de Admin-fin',
      linkedinUrl: '',
      photo: './assets/sophia.png'
    },
    {
      name: 'Mylena Macena',
      office: 'Gerente de Marketing',
      linkedinUrl: '',
      photo: './assets/mylena.png'
    },
    {
      name: 'Daniel Felizardo',
      office: 'Diretor de Marketing',
      linkedinUrl: '',
      photo: './assets/daniel.png'
    },
    {
      name: 'Lucas Andrade',
      office: 'Desenvolvedor',
      linkedinUrl: '',
      photo: './assets/lucas.png'
    },
    {
      name: 'Jessye Pereira',
      office: 'Desenvolvedora',
      linkedinUrl: '',
      photo: './assets/jessye.png'
    },
    {
      name: 'Johnner Yelcde',
      office: 'Desenvolvedor',
      linkedinUrl: '',
      photo: './assets/johnner.png'
    },
    {
      name: 'Jonata Barbosa',
      office: 'Desenvolvedor',
      linkedinUrl: '',
      photo: './assets/jon.png'
    },
    {
      name: 'Caue Trajano',
      office: 'Desenvolvedor',
      linkedinUrl: '',
      photo: './assets/caue.png'
    },
    {
      name: 'Maira Fernandes',
      office: 'Desenvolvedora',
      linkedinUrl: '',
      photo: './assets/maira.png'
    },
    {
      name: 'Matheus Kauã',
      office: 'Trainee',
      linkedinUrl: '',
      photo: './assets/matheus.png'
    },
    {
      name: 'Thaysa Mary',
      office: 'Trainne',
      linkedinUrl: '',
      photo: './assets/thaysa.png'
    },
  ]
}
