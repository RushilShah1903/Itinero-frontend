import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true; // Default to login mode
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      this.isLoginMode = urlSegments[0]?.path !== 'register'; // If route is 'register', set to false
    });
  }

  onSubmit() {
    if (this.isLoginMode) {
      console.log('Logging in with', this.email, this.password);
      this.router.navigate(['/user/dashboard']); // Redirect after login
    } else {
      console.log('Registering with', this.name, this.email, this.password);
      this.router.navigate(['/login']); // Redirect to login after successful registration
    }
  }
}
