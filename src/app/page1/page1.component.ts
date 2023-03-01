import { Component, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  animations: [
    trigger('changePage', [
      state('in', style({
       opacity: 0,
       "display": "none",
      })),
      state('*', style({
        opacity: 1,
        "display": "block",
       })),
     
      transition('* => in', [
        animate('0.5s')
      ]),
    ]),
    trigger('openCloseArrow', [
      state('open', style({
       height: 500
      })),
      transition('* => open', [
        animate('3s 1s')
      ]),
    ]),
    trigger('openCloseShape1', [
      state('open', style({
       opacity: 1
      })),
      transition('* => open', [
        animate('1s 1s')
      ]),
    ]),
    trigger('openCloseBtn', [
      state('open', style({
       opacity: 0.9,
       "border": "solid 1px white"
      })),
    
      transition('closed => open', [
        animate('1s')
      ]),
      transition('open => closed', [
        animate('1s')
      ]),
    ]),
    trigger('openCloseBtn2', [
      state('open', style({
       left: 30,
      })),
    
      transition('closed => open', [
        animate('1s 1s')
      ]),

    ]),
    
  ]
})
export class Page1Component {
  @Output() newItemEvent = new EventEmitter<string>();
  createCheck = false;
  createCheck2 = false;
  enterCheck = false;
  incheck = 'fds';
  constructor(){
    
  
  }
  enterBtn(){
    this.enterCheck = true;
  }
  leaveBtn(){
    this.enterCheck = false;
  }
  ngAfterViewInit(){
    this.incheck = 'fds';
    this.incheck = 'in';
    this.createCheck = true;
    this.createCheck2 = true;
    setInterval(() => {
      if(this.enterCheck)
        this.createCheck = true;
      else
        this.createCheck = !this.createCheck
    },1000);
  }
    
}
