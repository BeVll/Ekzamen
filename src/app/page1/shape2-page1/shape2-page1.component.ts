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
  selector: 'app-shape2-page1',
  templateUrl: '././shape2-page1.component.html',
  styleUrls: ['././shape2-page1.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
       right: '60px'
      })),
      state('closed', style({
        right: '30px'
       })),
    
      transition('closed => open', [
        animate('1s')
      ]),
      transition('open => closed', [
        animate('1s')
      ]),
    ])
    
  ]
})
export class Shape2Page1Component {
  createCheck = false;
  constructor(){
   
  }
  ngAfterViewInit(){
    this.createCheck = true;
    setInterval(() => (this.createCheck = !this.createCheck),800);
  }
}
