import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],
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
    trigger('openCloseTexts', [
      state('open', style({
       "left": "50px",
      })),
    
      transition('closed => open', [
        animate('1s')
      ]),

    ]),
    trigger('openCloseShape', [
      state('open', style({
       "width": "109px",
      })),
    
      transition('closed => open', [
        animate('1s 1s')
      ]),

    ]),
    trigger('openCloseLogo', [
      state('open', style({
       "right": "60px",
      })),
    
      transition('closed => open', [
        animate('1s')
      ]),

    ]),
  ]
})
export class Page4Component {
  @Output() newItemEvent = new EventEmitter<string>();
  incheck = 'fds';
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
