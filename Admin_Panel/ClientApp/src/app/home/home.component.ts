import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  standalone:false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated = false;
  profile: any;

  constructor(public router:Router,public modalService:NgbModal) { }

/**
   * Handle component initialization
   */
  async ngOnInit() {

    // this.auth.localAuthSetup();
    
  }
  // logout() {
  //   this.auth.logout();
  // }

  onClickLogin(){
   this.modalService.open(LoginComponent,{size:'md',centered:true}); 
  }
}
