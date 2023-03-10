import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { LogoPage1Component } from './page1/logo-page1/logo-page1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Shape2Page1Component } from './page1/shape2-page1/shape2-page1.component';
import { TextPage1Component } from './page1/text-page1/text-page1.component';
import { Page6Component } from './page6/page6.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    LogoPage1Component,
    Shape2Page1Component,
    TextPage1Component,
    Page6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
