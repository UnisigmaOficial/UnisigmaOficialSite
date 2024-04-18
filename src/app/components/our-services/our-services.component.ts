import { Component } from '@angular/core';

import { ServiceCardComponent } from '../service-card/service-card.component';
import { Service } from '../service-card/service';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  services: Service[] = [
    {
      title: 'Marketing',
      text: 'Plano de ação para o endomarketing e indomarketing, além de plano de marketing para as redes sociais',
      image: '/assets/undraw_marketing_re_7f1g 1.svg'
    },
    {
      title: 'Estruturação Financeira',
      text: 'Análise das entradas e saídas, planejamento financeiro, implementação de fluxo de caixa, treinamento e acompanhamento',
      image: '/assets/undraw_financial_data_re_p0fl 1.svg'
    },
    {
      title: 'Planejamento Estratégico',
      text: 'Análise dos dados operacionais e dos sistemas utilizados pela empresa, para sugerir melhorias e adaptações, atualização do fluxo operacional, treinamento e acompanhamento',
      image: '/assets/undraw_business_decisions_re_84ag 1.svg'
    },
    {
      title: 'Pesquisa de mercado',
      text: 'Consiste na análise dos concorrentes físicos e digitais, além da análise dos leads e dos produtos.',
      image: '/assets/undraw_learning_sketching_nd4f 1.svg'
    },
    {
      title: 'E-commerce',
      text: 'Levantamento de dados, listagem de pré-requisitos, desenvolvimento, treinamento e entrega',
      image: '/assets/undraw_progressive_app_m-9-ms 1.svg'
    },
    {
      title: 'Desenvolvimento de sites',
      text: 'Em um mundo cada vez mais moderno, ter presença na internet através de um website proporciona visibilidade, acessibilidade e credibilidade para as empresas.',
      image: '/assets/undraw_static_website_re_x70h 1.svg'
    },
    {
      title: 'Customer Experience',
      text: 'Mapear, analisar e identificar pontos de melhora na jornada do cliente, a análise é totalmente pautada na forma como os clientes percebem e se relacionam com a marca.',
      image: '/assets/undraw_experience_design_re_dmqq 1.svg'
    },
    {
      title: 'Prototipagem e Design',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam consectetur similique possimus sapiente, sequi expedita placeat quis odio, minus mollitia assumenda.',
      image: '/assets/undraw_design_tools_-42-tf 1.svg'
    },
  ]
}
