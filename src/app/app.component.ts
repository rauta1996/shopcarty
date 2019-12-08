import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-app';
  isMainContainer = true;

  getMessage(event) {
    console.log(event)
    this.isMainContainer = event;
  }

  getmsg(event) {
    this.isMainContainer = event;
  }
}
