import {Component} from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent {
  
  range(n: number): any[] {
    return Array(n);
  }
}
