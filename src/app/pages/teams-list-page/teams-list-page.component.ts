import { Component } from '@angular/core';
import { TeamsComponent } from '../../components/teams/teams.component';

@Component({
  selector: 'app-teams-list-page',
  standalone: true,
  imports: [
    TeamsComponent
  ],
  templateUrl: './teams-list-page.component.html',
  styleUrl: './teams-list-page.component.scss'
})
export class TeamsListPageComponent {

}
