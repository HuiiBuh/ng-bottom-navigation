import {Component, isDevMode} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  get devMode(): boolean {
    return isDevMode();
  }
}
