import { Component } from '@angular/core';
import { TeamComponent } from "../../components/team/team.component";
import { TeamSquadComponent } from "../../components/team-squad/team-squad.component";

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [
    TeamComponent,
    TeamSquadComponent
],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {

}
