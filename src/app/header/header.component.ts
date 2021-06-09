import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {

  userIsAuthenticated: boolean = false;

  userEmail: string;

  private authListenerSubs: Subscription

  constructor(private authService: AuthService) { }

  getCurrentUser() {
    return this.userEmail = localStorage.getItem("userEmail");
  }

  ngOnInit() {

    this.getCurrentUser();

    //call auth service to load data
    this.userIsAuthenticated = this.authService.getAuth();
    //code does not run in order without the code above ^^^^ due to asyncronis code

    //set up authStatus listener
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        //sets if user is authenticated or not
        this.userIsAuthenticated = isAuthenticated;
    });
  }

  onLogOut() {
    this.authService.logout();
    this.userEmail = null;
  }

  ngOnChanges() {

  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}

