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
      photo: '/assets/team-photos/gisele.png'
    },
    {
      name: 'Sophia Tomei',
      office: 'Diretora de Adm-fin',
      linkedinUrl: 'https://www.linkedin.com/in/sophia-tomei-1a9716278/',
      photo: '/assets/team-photos/sophia.png'
    },
    {
      name: 'Mylena Macena',
      office: 'Gerente de Marketing',
      linkedinUrl: 'https://www.linkedin.com/in/mylena-macena-747482232/',
      photo: '/assets/team-photos/mylena.png'
    },
    {
      name: 'Lucas Andrade',
      office: 'Consultor de Projetos',
      linkedinUrl: 'https://www.linkedin.com/in/lucasandrade912/',
      photo: '/assets/team-photos/lucas.png'
    },
    {
      name: 'Jessye Pereira',
      office: 'Consultora de Marketing',
      linkedinUrl: 'https://www.linkedin.com/in/jessyepereira/',
      photo: '/assets/team-photos/jessye.png'
    },
    {
      name: 'Johnner Yelcde',
      office: 'Consultor de Projetos',
      linkedinUrl: 'https://www.linkedin.com/in/johnner-yelcde-8b2736253/',
      photo: '/assets/team-photos/johnner.png'
    },
    {
      name: 'Jonata Barbosa',
      office: 'Consultor de Projetos',
      linkedinUrl: 'https://www.linkedin.com/in/jonata-barbosa-31103a19b/',
      photo: '/assets/team-photos/jon.png'
    },
    {
      name: 'Caue Trajano',
      office: 'Consultor de Projetos',
      linkedinUrl: 'https://www.linkedin.com/in/cauetrajano/',
      photo: '/assets/team-photos/caue.png'
    },
    {
      name: 'Maira Fernandes',
      office: 'Consultora de Projetos',
      linkedinUrl: 'https://www.linkedin.com/in/maira-fernandes-130761273/',
      photo: '/assets/team-photos/maira.png'
    },
    {
      name: 'Matheus Kauã',
      office: 'Consultor de Adm-fin',
      linkedinUrl: 'https://www.linkedin.com/in/matheus-souza-a8520a249/',
      photo: '/assets/team-photos/matheus.png'
    },
    {
      name: 'Thaysa Mary',
      office: 'Consultora de Adm-fin',
      linkedinUrl: 'https://www.linkedin.com/in/thaysa-mary-354849209/',
      photo: '/assets/team-photos/thaysa.png'
    },
    {
      name: 'Mateus Douglas',
      office: 'Gente e Gestão',
      linkedinUrl: 'https://www.linkedin.com/in/mateus-albuquerque-ab220a270/',
      photo: '/assets/team-photos/douglas.png'
    },
  ]
}
