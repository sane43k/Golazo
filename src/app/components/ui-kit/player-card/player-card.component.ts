import { Component, Input } from '@angular/core';
import { IPlayerProfile } from '../../../interfaces/player.interface';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {
  @Input() playerProfile?: IPlayerProfile;
}
