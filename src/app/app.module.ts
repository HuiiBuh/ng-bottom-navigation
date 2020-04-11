import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgBottomNavigationModule} from '../../projects/ng-bottom-navigation/src/lib/ng-bottom-navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgBottomNavigationModule,
        BrowserAnimationsModule,
        MatRippleModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
