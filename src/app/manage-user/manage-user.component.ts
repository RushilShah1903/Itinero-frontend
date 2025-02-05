import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  users: { id: number, name: string, email: string, role: string, status: string }[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Tom Brown', email: 'tom.brown@example.com', role: 'User', status: 'Active' },
    { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'User', status: 'Inactive' }
  ];

  selectedUser: { id: number, name: string, email: string, role: string, status: string } | null = null;

  ngOnInit(): void {
    // Initial actions (e.g., fetch users from an API)
  }

  editUser(user: any) {
    this.selectedUser = { ...user }; // Set selected user for editing
  }

  deleteUser(userId: number, role: string) {
    if (role === 'Admin') {
      alert("Admin users cannot be deleted.");
      return; // Prevent deletion for admin users
    }
    this.users = this.users.filter(user => user.id !== userId); // Delete user
  }

  saveUser() {
    if (this.selectedUser) {
      const index = this.users.findIndex(user => user.id === this.selectedUser?.id);
      if (index > -1) {
        this.users[index] = this.selectedUser;
      }
      this.selectedUser = null; // Reset after save
    }
  }

  cancelEdit() {
    this.selectedUser = null; // Reset when canceling edit
  }

  addUser() {
    const newUser = { id: Date.now(), name: '', email: '', role: 'User', status: 'Active' };
    this.users.push(newUser);
    this.selectedUser = newUser; // Automatically edit new user
  }

}
