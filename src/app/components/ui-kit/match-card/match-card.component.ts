import { Component, Input } from '@angular/core';
import { ILiveMatch } from '../../../interfaces/match.interface';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss'
})
export class MatchCardComponent {
  @Input() match?: ILiveMatch;
}
