import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode: boolean = true; // Default mode is login

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
