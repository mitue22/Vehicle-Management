import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  standalone:false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,public activeModal:NgbActiveModal,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
ngOnInit(): void {
  
}
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Successful:', this.loginForm.value);
      this.activeModal.close();
    }
  }

  closeModal() {
    this.activeModal.dismiss();
  }
  redirectToSignup(){
    this.router.navigate(['/signup']);
  }
  continueWithApple(){

  }
  continueWithMicrosoft(){

  }
  continueWithGoogle(){
    
  }
}
