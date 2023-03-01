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
  selector: 'app-text-page1',
  templateUrl: '././text-page1.component.html',
  styleUrls: ['././text-page1.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: "440px"
      })),
      state('closed', style({
        top: '1000px'
       })),
    
      transition('closed => open', [
        animate('0.8s')
      ]),
    ]),
    
    
  ]
})
export class TextPage1Component {
  createCheck = false;
  createCheck2 = false;
  constructor(){
   
  }
  ngAfterViewInit(){
    this.createCheck = true;
    this.createCheck2 = false;
  }
  enter(){
    this.createCheck2 = true;
  }
  leave(){
    this.createCheck2 = false;
  }
}
