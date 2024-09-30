import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() isModalOpen = false;
  @Input() title = '';

  @Output() cancelAction: EventEmitter<void> = new EventEmitter<void>();
}
