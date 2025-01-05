import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  protectedData: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getProtectedData().subscribe(
      data => {
        this.protectedData = data;
      },
      error => {
        console.error('Error fetching protected data', error);
      }
    );
  }
}