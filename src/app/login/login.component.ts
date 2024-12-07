import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  clientId: string = '';
  password: string = '';
  submitted: boolean = false;
  result: string = '';

  onSubmit() {
    this.submitted = true;
    this.result = `Welcome, ${this.clientId}<br>Your password is: ${this.password}`;
  }

}
