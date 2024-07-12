import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailspage',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.css'
})
export class DetailspageComponent {

  invoices = [
    {InvoiceID: '0001', Status: 'Pending', DueDate: '2024-09-23'},
    {InvoiceID: '0002', Status: 'Pending', DueDate: '2024-09-20'},
    {InvoiceID: '0003', Status: 'Collected', DueDate: '2024-04-03'},
    {InvoiceID: '0004', Status: 'Collected', DueDate: '2024-06-12'},
    {InvoiceID: '0005', Status: 'Collected', DueDate: '2024-02-27'},
  ]

  ngOnInit () {
    this.sortInvoices();
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

}
