import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  expenses: { id: number, employeeName: string, category: string, amount: number, date: Date }[] = [
    { id: 1, employeeName: 'John Doe', category: 'Hotel', amount: 200, date: new Date('2025-01-15') },
    { id: 2, employeeName: 'Jane Smith', category: 'Flight', amount: 350, date: new Date('2025-01-20') },
    { id: 3, employeeName: 'Tom Brown', category: 'Hotel', amount: 150, date: new Date('2025-02-02') },
    { id: 5, employeeName: 'Mike Lee', category: 'Flight', amount: 500, date: new Date('2025-02-10') }
  ];

  filteredExpenses: any[] = [];
  selectedCategory: string = 'all';
  totalExpense: number = 0;

  ngOnInit(): void {
    this.filteredExpenses = this.expenses; // Display all expenses initially
    this.calculateTotalExpense(); // Initial total calculation
  }

  filterExpenses() {
    if (this.selectedCategory === 'all') {
      this.filteredExpenses = this.expenses;
    } else {
      this.filteredExpenses = this.expenses.filter(expense => expense.category === this.selectedCategory);
    }
    this.calculateTotalExpense(); // Recalculate total after filtering
  }

  calculateTotalExpense() {
    // Calculate total expense from the filtered list
    this.totalExpense = this.filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  }
}
