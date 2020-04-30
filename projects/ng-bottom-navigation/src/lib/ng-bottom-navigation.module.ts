import {NgModule} from '@angular/core';
import {BottomNavWrapperComponent} from './bottom-nav-wrapper/bottom-nav-wrapper.component';
import {MatIconModule} from '@angular/material/icon';
import {BottomNavComponent} from './bottom-nav/bottom-nav.component';
import {ApplicationContentComponent} from './application-content/application-content.component';
import {BottomNavItemComponent} from './bottom-nav-item/bottom-nav-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TopNavWrapperComponent} from './top-nav-wrapper/top-nav-wrapper.component';

@NgModule({
  declarations: [BottomNavWrapperComponent, BottomNavComponent, ApplicationContentComponent, BottomNavItemComponent,
    TopNavWrapperComponent],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule,
    CommonModule,
  ],
  exports: [BottomNavWrapperComponent, BottomNavComponent, ApplicationContentComponent, BottomNavItemComponent, TopNavWrapperComponent],
})
export class NgBottomNavigationModule {
}

