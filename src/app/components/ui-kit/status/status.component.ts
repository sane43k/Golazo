import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {
  @Input() status: 'Loading...' | 'Nothing found' = 'Loading...';
}
