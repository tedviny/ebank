import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setTokens(token: string): void {
    localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);
    document.cookie = `auth_token=${token}; path=/`;
  }
}