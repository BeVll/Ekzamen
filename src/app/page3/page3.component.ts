import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
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
    trigger('openCloseLogo', [
      state('open', style({
       "right": "50px",

      })),
    
      transition('closed => open', [
        animate('1s')
      ]),

    ]),
    trigger('openCloseUsername', [
      state('open', style({
       "left": "50px",

      })),
    
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
    trigger('openCloseBtn', [
      state('open', style({
       "left": "30px",

      })),
    
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
    trigger('openCloseSocial', [
      state('open', style({
       "right": "60px",

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
    trigger('openCloseShapes2', [
      state('open', style({
       opacity: 1
      })),
      state('closed', style({
        opacity: 0.0
       })),
       transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
    trigger('openCloseArrows', [
      state('open', style({
       "margin-left": "20px"
      })),
      state('closed', style({
        "margin-left": "0px"
       })),
       transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class Page3Component {
  incheck = 'fds';
  @Output() newItemEvent = new EventEmitter<string>();
  createCheck = false;
  createCheck2 = false;
  ngAfterViewInit(){
    this.incheck = 'fds';
    this.incheck = 'in';
    this.createCheck = true;
      setInterval(() => {this.createCheck2 = !this.createCheck2},1000);
    
  }
  logoClick(){
    console.log(11);
    this.newItemEvent.emit("0");
  }
}
