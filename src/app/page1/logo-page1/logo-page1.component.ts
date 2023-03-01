import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-logo-page1',
  templateUrl: '././logo-page1.component.html',
  styleUrls: ['././logo-page1.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
       left: '50px'
      })),
      state('closed', style({
        left: '-300px'
       })),
      transition('* => open', [
        animate('0.8s')
      ]),
    ])
    
  ]
})
export class LogoPage1Component {
  createCheck = false;
  constructor(){
   
  }
  ngAfterViewInit(){
    this.createCheck = true;
    
  }
}
