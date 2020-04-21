import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-nav-container',
  templateUrl: './bottom-nav-container.component.html',
  styleUrls: ['./bottom-nav-container.component.scss'],
})
export class BottomNavContainerComponent {
  _height: string = '60px';

  @Input()
  set height(value: string) {
    this._height = value;
    document.documentElement.style.setProperty('--bottom-nav-height', value);
  }
}
