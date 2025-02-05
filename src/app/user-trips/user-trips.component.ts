import { Component, OnInit } from '@angular/core';

// Define the Trip interface
interface Trip {
  destination: string;
  date: string;
}

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.css']
})
export class UserTripsComponent implements OnInit {
  // Declare trips array with Trip type
  trips: Trip[] = [
    { destination: 'Paris', date: '2024-02-01' },
    { destination: 'New York', date: '2025-01-28' },
    { destination: 'London', date: '2024-01-15' },
    { destination: 'Tokyo', date: '2024-01-07' },
  ];
  
  filteredTrips: Trip[] = [];
  selectedFilter = 'today'; // Set default selected filter

  constructor() {}

  ngOnInit(): void {
    this.filterTrips(this.selectedFilter); // Apply default filter on load
  }

  filterTrips(filter: string): void {
    this.selectedFilter = filter; // Update selected filter

    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1);

    this.filteredTrips = this.trips.filter(trip => {
      const tripDate = new Date(trip.date);
      if (filter === 'today') {
        return tripDate.toDateString() === today.toDateString();
      } else if (filter === 'last-week') {
        return tripDate >= oneWeekAgo && tripDate <= today;
      } else if (filter === 'last-month') {
        return tripDate >= oneMonthAgo && tripDate <= today;
      }
      return true; // 'all' case
    });
  }
}
