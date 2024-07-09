import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {
  @ViewChild('modal') modal!: ElementRef;

  ngAfterViewInit() {
    this.setupClickOutside();
  }

  public openModal() {
    this.modal.nativeElement.style.display = 'block';
  }

  public closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }

  public setupClickOutside() {
    window.addEventListener('click', (event: MouseEvent) => {
      if (event.target === this.modal.nativeElement) {
        this.closeModal();
      }
    });
  }
}

