import { Component, Input } from '@angular/core';
import { ITeamInfo } from '../../../interfaces/team.interface';
import { FavBtnComponent } from "../fav-btn/fav-btn.component";

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [
    FavBtnComponent,
  ],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
  @Input() teamInfo?: ITeamInfo;
}
