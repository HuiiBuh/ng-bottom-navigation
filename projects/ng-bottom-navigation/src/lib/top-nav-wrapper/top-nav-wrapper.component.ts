import {Component} from '@angular/core';
import {BottomNavService} from '../bottom-nav.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'top-nav-wrapper',
  templateUrl: './top-nav-wrapper.component.html',
  styleUrls: ['./top-nav-wrapper.component.scss'],
})
export class TopNavWrapperComponent {
  _isVisible: boolean = false;

  constructor(private _bottomNavService: BottomNavService) {
    this._bottomNavService.bottomNavVisible.subscribe((event: boolean) => {
      // @ts-ignore
      if (typeof event === 'boolean') {
        this._isVisible = !event;
      }
    });
  }
}
