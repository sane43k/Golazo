import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { StatusComponent } from "../ui-kit/status/status.component";
import { debounceTime, Observable, Subject, takeUntil } from 'rxjs';
import { TeamPreviewCardComponent } from "../ui-kit/team-preview-card/team-preview-card.component";
import { Store } from '@ngrx/store';
import { searchTeamsByName } from '../../store/teams/teams.actions';
import { TeamsState } from '../../store/teams/teams.reducer';
import { selectTeamsState } from '../../store/teams/teams.selectors';

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
    AsyncPipe
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})

export class TeamsComponent implements OnInit, OnDestroy {
  @Input() header: string = '';
  searchTeamByName: FormControl = new FormControl('');
  teamsState$?: Observable<TeamsState>;

  private destroy$ = new Subject<void>();

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.searchTeamByName.valueChanges
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroy$),
      )
      .subscribe(teamName => {
        this.store.dispatch(searchTeamsByName({ teamName }));
        this.teamsState$ = this.store.select(selectTeamsState);        
      });
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
