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
      linkedinUrl: 'https://www.linkedin.com/in/gisele-silva-69308718a/',
      photo: './assets/gisele.png'
    },
    {
      name: 'Sophia Tomei',
      office: 'Diretor de Admin-fin',
      linkedinUrl: 'https://www.linkedin.com/in/sophia-tomei-1a9716278/',
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
      linkedinUrl: 'https://www.linkedin.com/in/danielgfelizardo/',
      photo: './assets/daniel.png'
    },
    {
      name: 'Lucas Andrade',
      office: 'Desenvolvedor',
      linkedinUrl: 'https://www.linkedin.com/in/lucasandrade912/',
      photo: './assets/lucas.png'
    },
    {
      name: 'Jessye Pereira',
      office: 'Desenvolvedora',
      linkedinUrl: 'https://www.linkedin.com/in/jessyepereira/',
      photo: './assets/jessye.png'
    },
    {
      name: 'Johnner Yelcde',
      office: 'Desenvolvedor',
      linkedinUrl: 'https://www.linkedin.com/in/johnner-yelcde-8b2736253/',
      photo: './assets/johnner.png'
    },
    {
      name: 'Jonata Barbosa',
      office: 'Desenvolvedor',
      linkedinUrl: 'https://www.linkedin.com/in/jonata-barbosa-31103a19b/',
      photo: './assets/jon.png'
    },
    {
      name: 'Caue Trajano',
      office: 'Desenvolvedor',
      linkedinUrl: 'https://www.linkedin.com/in/cauetrajano/',
      photo: './assets/caue.png'
    },
    {
      name: 'Maira Fernandes',
      office: 'Desenvolvedora',
      linkedinUrl: 'https://www.linkedin.com/in/maira-fernandes-130761273/',
      photo: './assets/maira.png'
    },
    {
      name: 'Matheus Kauã',
      office: 'Consultor de Adm-fin',
      linkedinUrl: '',
      photo: './assets/matheus.png'
    },
    {
      name: 'Thaysa Mary',
      office: 'Consultor de Adm-fin',
      linkedinUrl: '',
      photo: './assets/thaysa.png'
    },
    {
      name: 'Mateus Douglas',
      office: 'Gente e Gestão',
      linkedinUrl: '',
      photo: './assets/douglas.png'
    },
  ]
}
