import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(public mainapp: AppComponent) { }

  ngOnInit(): void {
    this.user = this.mainapp.currentUser;
  }

  logOut(): void {
    this.mainapp.currentUser = undefined;
    this.user = undefined;
  }
}
