import {BrowserModule} from '@angular/platform-browser';
import {NgModule, SecurityContext} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgBottomNavigationModule} from '../../projects/ng-bottom-navigation/src/lib/ng-bottom-navigation.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HomeComponent} from './home/home.component';
import {LikeComponent} from './like/like.component';
import {WatchComponent} from './watch/watch.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
