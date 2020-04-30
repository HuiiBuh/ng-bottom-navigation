import {Component, Input} from '@angular/core';
import {BottomNavService} from '../bottom-nav.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-nav-wrapper',
  templateUrl: './bottom-nav-wrapper.component.html',
  styleUrls: ['./bottom-nav-wrapper.component.scss'],
})
export class BottomNavWrapperComponent {

  _bottomNavHeight: string = '60px';
  @Input()
  set bottomNavHeight(value: string) {
    this._bottomNavHeight = value;
    this.handleCssVariablesOnLayoutChange(this._bottomNavService.bottomNavVisible.lastValue);
    document.documentElement.style.setProperty('--bottom-nav-height', value);
  }

  _topNavHeight: string = '60xp';
  @Input()
  set topNavHeight(value: string) {
    this._topNavHeight = value;
    this.handleCssVariablesOnLayoutChange(this._bottomNavService.bottomNavVisible.lastValue);
    document.documentElement.style.setProperty('--top-nav-height', value);
  }

  _bottomNavBreakpoint: string = '600px';
  @Input()
  set bottomNavBreakpoint(value: string) {
    this._bottomNavBreakpoint = value;
    this._bottomNavService.breakpointWidth = value;
  }

  constructor(private _bottomNavService: BottomNavService) {
    this._bottomNavService.bottomNavVisible.subscribe((bottomNavVisible) => this.handleCssVariablesOnLayoutChange(bottomNavVisible));
    this.bottomNavBreakpoint = '600px';
  }

  handleCssVariablesOnLayoutChange(bottomNavVisible: boolean): void {
    if (bottomNavVisible === true) {
      document.documentElement.style.setProperty('--bottom-nav-height', this._bottomNavHeight);
      document.documentElement.style.setProperty('--top-nav-height', '0px');
    } else if (bottomNavVisible === false) {
      document.documentElement.style.setProperty('--bottom-nav-height', '0px');
      document.documentElement.style.setProperty('--top-nav-height', this._topNavHeight);
    }
  }
}
