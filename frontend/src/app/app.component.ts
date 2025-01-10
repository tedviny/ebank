import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'eBank';

  constructor(private authService: AuthService, private tokenService: TokenService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.authService.checkTokenExpiration();
    }, 10000); 
    const token = 'your_jwt_secret';
    this.tokenService.setTokens(token);
  }
}
