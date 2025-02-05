import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { UserTripsComponent } from './user-trips/user-trips.component';
import { HomeComponent } from './home/home.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { BooktripComponent } from './booktrip/booktrip.component';
import { AuthComponent } from './auth/auth.component';

// Define Routes
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to login page initially
  { path: 'auth', component: AuthComponent },

  // Admin Layout with Nested Routes
  {
    path: '',
    component: LayoutComponent, // Sidebar & Router Outlet for Admin
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'home', component: HomeComponent},
      { path: 'manage-users', component: ManageUserComponent },
      { path: 'manage-trips', component: BookingManagementComponent },
      { path: 'expense-reports', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'trips', component: UserTripsComponent },
      { path: 'booking', component: BooktripComponent },

    ]
  },
  // Catch-all for unknown routes
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


