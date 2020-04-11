import {NgModule} from '@angular/core';
import {BottomNavContainerComponent} from './bottom-nav-container/bottom-nav-container.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { BottomNavContentComponent } from './bottom-nav-content/bottom-nav-content.component';
import { BottomNavItemComponent } from './bottom-nav-item/bottom-nav-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [BottomNavContainerComponent, BottomNavComponent, BottomNavContentComponent, BottomNavItemComponent],
  imports: [
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule,
  ],
  exports: [BottomNavContainerComponent, BottomNavComponent, BottomNavContentComponent, BottomNavItemComponent],
})
export class NgBottomNavigationModule {
}

