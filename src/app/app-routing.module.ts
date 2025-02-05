import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

// Define Routes
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login page initially
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Admin Layout with Nested Routes
  {
    path: 'admin',
    component: LayoutComponent, // Sidebar & Router Outlet for Admin
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      // { path: 'users', component: UsersComponent },
      // { path: 'bookings', component: BookingsComponent },
      // { path: 'reports', component: ReportsComponent },
      // { path: 'settings', component: SettingsComponent }
    ]
  },

  // User Layout with Nested Routes
  {
    path: 'user',
    component: LayoutComponent, // Sidebar & Router Outlet for Users
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: UserDashboardComponent },
      // { path: 'trips', component: UserTripsComponent },
      // { path: 'bookings', component: UserBookingsComponent },
      // { path: 'settings', component: UserSettingsComponent }
    ]
  },

  // Catch-all for unknown routes
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
