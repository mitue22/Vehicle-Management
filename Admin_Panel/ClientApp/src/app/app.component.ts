import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  loggedIn=false;
  // constructor(public route:ActivatedRoute,private authService:AuthService,private router:Router){}
  ngOnInit() {
    //  this.authService.handleRedirectCallback();
  }
}
