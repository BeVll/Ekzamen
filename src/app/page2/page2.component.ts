import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  animations: [
    trigger('openCloseLogo', [
      state('open', style({
       "right": "80px",

      })),
    
      transition('closed => open', [
        animate('1s')
      ]),

    ]),
    trigger('openCloseTarg', [
      state('open', style({
       "left": "60px",
      })),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
    trigger('openCloseTexts', [
      state('open', style({
       "left": "50px",
      })),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
    trigger('openCloseBtn2', [
      state('open', style({
       left: 30,
      })),
  
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
    trigger('openCloseShapes', [
      state('open', style({
       opacity: 1
      })),
      transition('closed => open', [
        animate('1s 1s')
      ]),
    ]),
    trigger('openCloseShape2', [
      state('open', style({
       height: 40
      })),
      state('closed', style({
        height: 35
       })),
       transition('open => closed', [
        animate('1.5s')
      ]),
      transition('closed => open', [
        animate('1.5s')
      ]),
    ]),
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
    
  ]
})
export class Page2Component {
  @Output() newItemEvent = new EventEmitter<string>();
  incheck = 'fds';
  createCheck = false;
  createCheck6 = false;
  constructor(){}
  ngAfterViewInit(){
    this.incheck = 'fds';
    this.incheck = 'in';
    this.createCheck = true;
    setInterval(() => {this.createCheck6 = !this.createCheck6},1000);
  }
  logoClick(){
    console.log(11);
    this.newItemEvent.emit("0");
  }
}
