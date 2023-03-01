import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ComponentFactoryResolver, createComponent, DoCheck, ViewChild, ViewContainerRef } from '@angular/core';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    
  ]
})
export class AppComponent{
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  components = [Page1Component, Page2Component, Page3Component, Page4Component, Page5Component]
  index = 0;
  title = 'Ekzamen';

    constructor(private componentFactoryResolver: ComponentFactoryResolver){
      
    }


    ngAfterViewInit() {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[this.index]);
      this.container.createComponent(componentFactory);
     
    }

    leftBtn(){
      
      if(this.index == 0){
        this.index = this.components.length - 1;
      }
      else
        this.index--;
       
    
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[this.index]);
      this.container.remove(0);
      let r = this.container.createComponent(componentFactory);

      r.instance.newItemEvent.subscribe(evt => this.setIndex(evt));
    }

    setIndex(newItem: string){
      this.index = parseInt(newItem);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[this.index]);
      this.container.remove(0);
      let r = this.container.createComponent(componentFactory);

      r.instance.newItemEvent.subscribe(evt => this.setIndex(evt));
    }
    rightBtn(){
      if(this.index == this.components.length - 1){
        this.index = 0;
      }
      else
        this.index++;
        
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[this.index]);
        this.container.remove(0);
        let r = this.container.createComponent(componentFactory);
  
        r.instance.newItemEvent.subscribe(evt => this.setIndex(evt));
    }
}
