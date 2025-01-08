import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'eBank';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.authService.checkTokenExpiration();
    }, 10000); 
  }
}
