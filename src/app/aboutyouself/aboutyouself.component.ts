import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutyouself',
  templateUrl: './aboutyouself.component.html',
  styleUrls: ['./aboutyouself.component.css']
})
export class AboutyouselfComponent {
  educations: Array<string> = ['1975-1980 - обучение  в Московском институте управления им. Серго Орджоникидзе, специальность - "инженер-экономист"', '1995-1997 - обучение в  Российской академиигосударственной службы при президенте РФ','Кандидат юридических наук'];
}
