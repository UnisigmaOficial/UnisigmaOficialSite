import { Component } from '@angular/core';
import { WhoweareComponent } from '../../components/whoweare/whoweare.component';
import { ValuesComponent } from '../../components/values/values.component';
import { FeedbacksComponent } from '../../components/feedbacks/feedbacks.component';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [WhoweareComponent, ValuesComponent, FeedbacksComponent],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css'
})
export class PortifolioComponent {

}
