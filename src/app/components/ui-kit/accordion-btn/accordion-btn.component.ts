import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-accordion-btn',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './accordion-btn.component.html',
  styleUrl: './accordion-btn.component.scss'
})
export class AccordionBtnComponent {
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggleAccordion($event: Event) {
    $event.stopPropagation();

    this.isOpenChange.emit(!this.isOpen);
  }

}
