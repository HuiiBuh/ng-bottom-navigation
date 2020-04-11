import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-nav-item',
  templateUrl: './bottom-nav-item.component.html',
  styleUrls: ['./bottom-nav-item.component.scss'],
})
export class BottomNavItemComponent {
  @Input()
  rippleRadius: number = 70;
}
