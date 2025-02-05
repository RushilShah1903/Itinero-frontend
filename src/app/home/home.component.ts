import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trips: { destination: string, startDate: Date }[] = [
    { destination: 'Paris', startDate: new Date('2025-02-10T00:00:00') },
    { destination: 'London', startDate: new Date('2025-03-15T00:00:00') },
    { destination: 'Berlin', startDate: new Date('2025-04-05T00:00:00') }
  ];

  nearestTrip: any;
  countdown: string = '';

  ngOnInit(): void {
    this.nearestTrip = this.getNearestUpcomingTrip();
    if (this.nearestTrip) {
      this.calculateCountdown(this.nearestTrip.startDate);
    }
  }

  // Get the nearest upcoming trip
  getNearestUpcomingTrip() {
    const now = new Date();
    const futureTrips = this.trips.filter(trip => new Date(trip.startDate) > now);
    return futureTrips.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())[0];
  }

  // Calculate the countdown for the trip's start date
  calculateCountdown(tripStartDate: Date) {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = tripStartDate.getTime() - now.getTime();
      if (timeDifference <= 0) {
        this.countdown = 'Trip has started!';
        clearInterval(interval); // Clear the interval once the countdown ends
      } else {
        const days = Math.floor(timeDifference / (1000 * 3600 * 24));
        const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
        const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000); // Update every second
  }
}
