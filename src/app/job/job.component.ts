import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  jobs: Array<String> = ['1980-1983 - главный инженер Видневского АТП', '1983-1990 -  второй секретарь Ленинского районного комитета КПСС', '1991-1999, 2003-2010 - глава администрации Ленинского района Московской области', 'с 2010 - губернатор Ростовской области']
}
