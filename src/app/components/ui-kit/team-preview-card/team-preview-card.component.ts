import { Component, Input } from '@angular/core';
import { ITeamInfo } from '../../../interfaces/team.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-preview-card',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './team-preview-card.component.html',
  styleUrl: './team-preview-card.component.scss'
})
export class TeamPreviewCardComponent {
  @Input() teamInfo?: ITeamInfo;
}
