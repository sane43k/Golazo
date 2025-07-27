import { Component } from '@angular/core';
import { TeamComponent } from "../../components/team/team.component";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    TeamComponent
  ],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {

}
