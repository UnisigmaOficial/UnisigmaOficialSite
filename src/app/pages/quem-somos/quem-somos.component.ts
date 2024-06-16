import { Component } from '@angular/core';

import { ValuesComponent } from '../../components/values/values.component';
import { WhoweareComponent } from '../../components/whoweare/whoweare.component';
import { OurTeamComponent } from '../../components/our-team/our-team.component';

@Component({
  selector: 'app-quem-somos',
  standalone: true,
  imports: [WhoweareComponent, ValuesComponent, OurTeamComponent],
  templateUrl: './quem-somos.component.html',
  styleUrl: './quem-somos.component.css'
})
export class QuemSomosComponent {

}
