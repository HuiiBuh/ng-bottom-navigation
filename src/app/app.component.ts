import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-app';

  toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
  }

  toggleColorfulMode() {
    document.body.classList.toggle('colorful-theme');
  }
}
