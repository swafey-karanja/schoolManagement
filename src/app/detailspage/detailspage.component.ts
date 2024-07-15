import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detailspage',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.css'
})
export class DetailspageComponent {

  showForm = false;
  invoiceId = '';
  dueDate = '';
  status = '';

  invoices = [
    {InvoiceID: '0001', Status: 'Pending', DueDate: '2024-09-23'},
    {InvoiceID: '0002', Status: 'Pending', DueDate: '2024-09-20'},
    {InvoiceID: '0003', Status: 'Collected', DueDate: '2024-04-03'},
    {InvoiceID: '0004', Status: 'Collected', DueDate: '2024-06-12'},
    {InvoiceID: '0005', Status: 'Collected', DueDate: '2024-02-27'},
  ]

  ngOnInit () {
    this.sortInvoices();
    // this.loadInvoices();
  }

  sortInvoices () {
    this.invoices.sort((a, b) => {
      if (a.Status === 'Pending' && b.Status !== 'Pending') {
        return -1;
      } else if (a.Status !== 'Pending' && b.Status === 'Pending') {
        return 1;
      } else {
        return new Date(a.DueDate).getTime() - new Date(b.DueDate).getTime();
      }
    })
  }

  onSubmit() {
    // Handle form submission
    console.log('Invoice ID:', this.invoiceId);
    console.log('Status:', this.status);
    console.log('Due Date:', this.dueDate);

    // Add new invoice to the list
    this.invoices.push({
      InvoiceID: this.invoiceId,
      Status: this.status,
      DueDate: this.dueDate
    });

    this.saveInvoices();

    // Clear the form fields
    this.invoiceId = '';
    this.status = 'Pending';
    this.dueDate = '';

    // Hide the form after submission
    this.showForm = false;
  }


  deleteInvoice(invoice: any) {
    console.log('Delete Invoice:', invoice);
    this.invoices = this.invoices.filter(i => i !== invoice);
    this.saveInvoices();
  }

  addInvoice() {
      this.showForm = !this.showForm; // Toggle the form visibility
  }

  saveInvoices() {
    localStorage.setItem('invoices', JSON.stringify(this.invoices));
  }

  // loadInvoices() {
  //   const loadedinvoices = localStorage.getItem('invoices');
  //   if(loadedinvoices) {
  //     this.invoices = JSON.parse(loadedinvoices);
  //   }
  // }

}
