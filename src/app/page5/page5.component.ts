import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss'],
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
    trigger('openCloseBtn', [
      state('open', style({
       opacity: 1,
      })),
    
      transition('closed => open', [
        animate('1s 0.5s')
      ]),

    ]),
    trigger('openCloseTexts', [
      state('open', style({
       right: 55,
      })),
    
      transition('closed => open', [
        animate('1s')
      ]),

    ]),
    trigger('openCloseSocial', [
      state('open', style({
       right: 60,
      })),
    
      transition('closed => open', [
        animate('1s 1s')
      ]),

    ]),
    trigger('openCloseLight', [
      state('open', style({
       opacity: 1
      })),
    
      transition('closed => open', [
        animate('1s 2s')
      ]),

    ]),
    
  ]
})
export class Page5Component {
  @Output() newItemEvent = new EventEmitter<string>();
  incheck = 'fds';
  createCheck = false;
  ngAfterViewInit(){
    this.incheck = 'fds';
    this.incheck = 'in';
    this.createCheck = true;
  }
  
}
