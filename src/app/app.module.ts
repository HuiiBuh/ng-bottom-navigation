import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgBottomNavigationModule} from '../../projects/ng-bottom-navigation/src/lib/ng-bottom-navigation.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HomeComponent} from './home/home.component';
import {LikeComponent} from './like/like.component';
import {WatchComponent} from './watch/watch.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LikeComponent,
    WatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBottomNavigationModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
