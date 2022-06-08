import { Component } from '@angular/core';

import '@dsy/button';
import '@dsy/input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'John Doe';
  count = 0;
  increaseCounter() {
    this.count = this.count + 1;
  }
  handleInput(e: Event) {
    this.name = (e as CustomEvent).detail.value;
  }
}
