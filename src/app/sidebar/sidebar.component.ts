import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  role: 'admin' | 'user' = 'admin'; // Default role (Change dynamically based on authentication)

  constructor() { }

  ngOnInit(): void {
    // Ideally, fetch the role from a user service or local storage
    // this.role = this.authService.getUserRole(); 
  }
}
