import { Component, Input } from '@angular/core';
import { IPlayerPreview } from '../../../interfaces/player.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player-preview-card',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './player-preview-card.component.html',
  styleUrl: './player-preview-card.component.scss'
})
export class PlayerPreviewCardComponent {
  @Input() teamPlayer?: IPlayerPreview;
}
