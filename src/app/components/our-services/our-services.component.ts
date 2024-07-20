import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Service } from '../service-card/service';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [ServiceCardComponent, RouterLink],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  services: Service[] = [
    {
      title: 'Marketing',
      text: 'Plano de ação para o endomarketing e indomarketing, além de plano de marketing para as redes sociais.',
      image: '/assets/services-illustrations/undraw_solution_mindset_re_57bf 1.svg'
    },
    {
      title: 'Estruturação Financeira',
      text: 'Análise das entradas e saídas, planejamento financeiro, implementação de fluxo de caixa, treinamento e acompanhamento.',
      image: '/assets/services-illustrations/undraw_financial_data_re_p0fl 1.svg'
    },
    {
      title: 'Planejamento Estratégico',
      text: 'Análise dos dados operacionais e dos sistemas utilizados pela empresa, para sugerir melhorias e adaptações, atualização do fluxo operacional, treinamento e acompanhamento.',
      image: '/assets/services-illustrations/undraw_business_decisions_re_84ag 1.svg'
    },
    {
      title: 'Pesquisa de Mercado',
      text: 'Consiste na análise dos concorrentes físicos e digitais, além da análise dos leads e dos produtos.',
      image: '/assets/services-illustrations/undraw_learning_sketching_nd4f 1.svg'
    },
    {
      title: 'Cliente Oculto',
      text: 'Avaliação da experiência de compra dos clientes. Identificar pontos a serem melhorados na jornada do cliente, para que sua empresa ofereça cada vez mais qualidade.',
      image: '/assets/services-illustrations/undraw_solution_mindset_re_57bf 1.svg'
    },
    {
      title: 'Customer Experience',
      text: 'Mapear, analisar e identificar pontos de melhora na jornada do cliente, a análise é totalmente pautada na forma como os clientes percebem e se relacionam com a marca.',
      image: '/assets/services-illustrations/undraw_experience_design_re_dmqq 1.svg'
    },
    {
      title: 'Desenvolvimento de Sites',
      text: 'Em um mundo cada vez mais moderno, ter presença na internet através de um website proporciona visibilidade, acessibilidade e credibilidade para as empresas.',
      image: '/assets/services-illustrations/undraw_static_website_re_x70h 1.svg'
    },
    {
      title: 'Sistema de Agendamento',
      text: 'Produzimos sistema de agendamento de serviços que permite empresas e profissionais organizem suas consultas, agendamentos e compromissos de maneira eficiente.',
      image: '/assets/services-illustrations/undraw_online_calendar_re_wk3t 1.svg'
    },
    {
      title: 'Sistema de Gestão',
      text: 'Ferramenta abrangente para empresas que precisam gerenciar suas operações de serviço de forma eficaz Pode incluir rastreamento de pedidos, gerenciamento de inventário, controle financeiro e etc.',
      image: '/assets/services-illustrations/undraw_hiring_re_yk5n 1.svg'
    },
    {
      title: 'Sistema de Menu Digital',
      text: 'Oferecemos um sistema de cardápio digital inovador para restaurantes e bares, permitindo que seus clientes acessem o menu e façam pedidos diretamente através de QR codes ou pelo whatsApp.',
      image: '/assets/services-illustrations/undraw_diet_ghvw 1.svg'
    },
  ]
}
