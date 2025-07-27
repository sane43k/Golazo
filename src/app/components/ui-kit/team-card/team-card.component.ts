import { Component, Input } from '@angular/core';
import { ITeamInfo } from '../../../interfaces/team.interface';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
  @Input() teamInfo?: ITeamInfo;
}
