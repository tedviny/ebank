import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  clientId: string = '';
  password: string = '';
  errorMessage: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.clientId, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your credentials and try again.'; // Set error message
      }
    );
  }
}