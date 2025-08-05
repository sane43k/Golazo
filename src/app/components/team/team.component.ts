import { Component, OnInit } from '@angular/core';
import { TeamCardComponent } from "../ui-kit/team-card/team-card.component";
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { StatusComponent } from "../ui-kit/status/status.component";
import { Store } from '@ngrx/store';
import { searchTeamByID } from '../../store/teams/teams.actions';
import { Observable } from 'rxjs';
import { TeamsState } from '../../store/teams/teams.reducer';
import { selectTeamsState } from '../../store/teams/teams.selectors';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    TeamCardComponent,
    StatusComponent,
    NgIf,
    AsyncPipe,
],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  teamsState$?: Observable<TeamsState>;

  constructor(
    private store: Store,
    private router: ActivatedRoute,
  ) { };

  ngOnInit(): void {
    let teamID: string | null = this.getTeamID();

    this.store.dispatch(searchTeamByID({ teamID }));
    this.teamsState$ = this.store.select(selectTeamsState);
  };

  getTeamID() {
    return this.router.snapshot.paramMap.get('id');
  };

}
