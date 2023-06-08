import { Component } from '@angular/core';
import { Info } from './interfaceInfo';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  userInfo: Info = {
    name: 'Василий Юрьевич Голубев',
    job: 'губерантор Ростовской области',
    town: 'Ростов-на-Дону',
    age: 66
  }
}
