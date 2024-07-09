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
    { firstName: 'Jill', lastName: 'Smith', age: 50 },
    { firstName: 'Eve', lastName: 'Jackson', age: 94 },
    // Add more data as needed
  ];

  open(person: any) {
    console.log(`Collecting data for ${person.firstName} ${person.lastName}`);
    // Add your modal opening logic here
    this.isModalOpen =true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
