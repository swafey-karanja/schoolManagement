import { Component } from '@angular/core';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [ModalFormComponent, CommonModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {
  isModalOpen = false;

  people = [
    { SchoolName: 'UA Highschool', AmountDue: '200,000', DueDate: '2024-07-05' },
    { SchoolName: 'Shiketsu Highschool', AmountDue: '150,000', DueDate: '2023-10-01' },
    { SchoolName: 'USJ Highschool', AmountDue: '100,000', DueDate: '2024-01-05' },
    // Add more data as needed
  ];

  ngOnInit() {
    this.sortByDueDate();
  }

  sortByDueDate() {
    this.people.sort((a, b) => new Date(a.DueDate).getTime() - new Date(b.DueDate).getTime());
  }

  open(person: any) {
    console.log(`Collecting data for ${person.SchoolName} ${person.AmountDue}`);
    // Add your modal opening logic here
    this.isModalOpen =true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
