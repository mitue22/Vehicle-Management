import { Component, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
//  isAuthenticated = false;

//   private auth0Client: Auth0Client;

//   constructor(public auth: AuthService) { }

/**
   * Handle component initialization
   */
  async ngOnInit() {
    // Get an instance of the Auth0 client
    // this.auth0Client = await this._auth.getAuth0Client();
    // On initial load, set up local auth streams
    // this.auth.localAuthSetup();
  }
}
