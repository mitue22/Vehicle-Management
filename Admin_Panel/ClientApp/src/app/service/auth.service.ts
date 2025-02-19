// import { Injectable } from '@angular/core';
// import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private auth0Client: Auth0Client | null = null;
//   public isAuthenticated = false;
//   public user: any = null;
//   private accessToken: string | null = null;

//   constructor() {
//     this.initializeAuth0();
//   }

//   async initializeAuth0() {
//     this.auth0Client = await createAuth0Client({
//       domain: 'YOUR_AUTH0_DOMAIN',
//       client_id: 'YOUR_AUTH0_CLIENT_ID',
//       redirect_uri: window.location.origin
//     });

//     // Check if the user is already authenticated
//     this.isAuthenticated = await this.auth0Client.isAuthenticated();

//     if (this.isAuthenticated) {
//       this.user = await this.auth0Client.getUser();
//       this.accessToken = await this.auth0Client.getTokenSilently();
//     }
//   }

//   async login() {
//     if (this.auth0Client) {
//       await this.auth0Client.loginWithRedirect();
//     }
//   }

//   async logout() {
//     if (this.auth0Client) {
//       await this.auth0Client.logout({ returnTo: window.location.origin });
//       this.isAuthenticated = false;
//       this.user = null;
//       this.accessToken = null;
//     }
//   }

//   async handleRedirectCallback() {
//     if (this.auth0Client) {
//       await this.auth0Client.handleRedirectCallback();
//       this.isAuthenticated = await this.auth0Client.isAuthenticated();
//       this.user = await this.auth0Client.getUser();
//       this.accessToken = await this.auth0Client.getTokenSilently();
//     }
//   }

//   async getAccessTokenSilently(): Promise<string | null> {
//     if (this.auth0Client) {
//       return await this.auth0Client.getTokenSilently();
//     }
//     return null;
//   }

//   async localAuthSetup() {
//     if (this.auth0Client) {
//       this.isAuthenticated = await this.auth0Client.isAuthenticated();
//       if (this.isAuthenticated) {
//         this.user = await this.auth0Client.getUser();
//         this.accessToken = await this.auth0Client.getTokenSilently();
//         localStorage.setItem('auth_isAuthenticated', 'true');
//       } else {
//         localStorage.removeItem('auth_isAuthenticated');
//       }
//     }
//   }
// }
