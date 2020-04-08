import { Component } from '@angular/core';
import { USERS } from './mock-data/mock-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alGO & Co';
  currentUser = undefined;
}
