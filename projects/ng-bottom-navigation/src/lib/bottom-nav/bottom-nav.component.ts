import {Component} from '@angular/core';
import {BottomNavService} from '../bottom-nav.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent {
  _isVisible: boolean = true;

  constructor(private _bottomNavService: BottomNavService) {
    this._bottomNavService.bottomNavVisible.subscribe((event: boolean) => {
      // @ts-ignore
      if (typeof event === 'boolean') {
        this._isVisible = event;
      }
    });
  }

}
