import { Component, ViewChild } from '@angular/core';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [ModalFormComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {
  @ViewChild(ModalFormComponent) modalForm!: ModalFormComponent;

  openModal() {
    this.modalForm.openModal();
  }
}
