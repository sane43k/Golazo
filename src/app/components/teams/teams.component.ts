import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { StatusComponent } from "../ui-kit/status/status.component";
import { debounceTime, map, Observable, Subject, takeUntil } from 'rxjs';
import { TeamPreviewCardComponent } from "../ui-kit/team-preview-card/team-preview-card.component";
import { Store } from '@ngrx/store';
import { searchTeamsByName } from '../../store/teams/teams.actions';
import { selectFavoriteTeams, selectTeams, selectTeamsFailure, selectTeamsLoading } from '../../store/teams/teams.selectors';
import { ITeamInfo } from '../../interfaces/team.interface';
import { TrimPipe } from '../../pipes/trim.pipe';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    TeamPreviewCardComponent,
    NgFor,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    StatusComponent,
    AsyncPipe,
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
  providers: [TrimPipe]
})

export class TeamsComponent implements OnInit, OnDestroy {
  @Input() header: string = '';
  @Input() isTeamsSearch: boolean = false;

  private destroy$ = new Subject<void>();

  searchTeamByName: FormControl = new FormControl('');

  teams$?: Observable<ITeamInfo[]>;
  loading$?: Observable<boolean>;
  error$?: Observable<any>;

  constructor(
    private store: Store,
    private trimPipe: TrimPipe,
  ) { };

  ngOnInit(): void {
    this.loading$ = this.store.select(selectTeamsLoading)
    this.error$ = this.store.select(selectTeamsFailure);

    if (this.isTeamsSearch) {
      this.searchTeamByName.valueChanges
        .pipe(
          debounceTime(1000),
          map(value => this.trimPipe.transform(value)),
          takeUntil(this.destroy$),
        )
        .subscribe(teamName => {
          this.store.dispatch(searchTeamsByName({ teamName }));
          this.teams$ = this.store.select(selectTeams);
          
          this.searchTeamByName.setValue(teamName, { emitEvent: false });
        });
    } else {
      this.teams$ = this.store.select(selectFavoriteTeams);
    }
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
