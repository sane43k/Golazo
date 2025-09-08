import { Component, Input } from '@angular/core';
import { StatusComponent } from "../ui-kit/status/status.component";
import { PlayerPreviewCardComponent } from "../ui-kit/player-preview-card/player-preview-card.component";
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { searchTeamSquadByTeamID } from '../../store/team-squad/team-squad.actions';
import { TeamSquadState } from '../../store/team-squad/team-squad.reducer';
import { selectTeamSquadState } from '../../store/team-squad/team-squad.selectors';

@Component({
  selector: 'app-team-squad',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    StatusComponent, 
    PlayerPreviewCardComponent
  ],
  templateUrl: './team-squad.component.html',
  styleUrl: './team-squad.component.scss'
})
export class TeamSquadComponent {
  @Input() teamID: string = '';

  teamSquadState$?: Observable<TeamSquadState>;

  constructor(
    private store: Store,
    private router: ActivatedRoute,
  ) { };

  ngOnInit(): void {
    this.store.dispatch(searchTeamSquadByTeamID({ teamID: this.getTeamID() }));
    this.teamSquadState$ = this.store.select(selectTeamSquadState);
  };

  getTeamID() {
    return this.router.snapshot.paramMap.get('id') || this.teamID;
  };
  
}
