import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() logoType: 'default-black' | 'default-white' | 'isolated-black' | 'isolated-white' = 'default-white';
}
