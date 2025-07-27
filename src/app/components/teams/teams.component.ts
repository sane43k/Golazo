import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FootballService } from '../../services/football.service';
import { ITeamInfo } from '../../interfaces/team.interface';
import { NgFor, NgIf } from '@angular/common';
import { StatusComponent } from "../ui-kit/status/status.component";
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { TeamPreviewCardComponent } from "../ui-kit/team-preview-card/team-preview-card.component";

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
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})

export class TeamsComponent implements OnInit, OnDestroy {
  @Input() header: string = '';
  loading: boolean = false;
  searchTeamByName: FormControl = new FormControl('');
  teamsInfo: ITeamInfo[] = [];

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private footballService: FootballService) { };

  ngOnInit(): void {
    this.searchTeamByName.valueChanges
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroy$),
      )
      .subscribe(teamName => {
        this.loading = true;
        this.footballService.getTeamsInfoByName(teamName)
          .pipe(
            takeUntil(this.destroy$),
          )
          .subscribe(res => {
            this.teamsInfo = res.response
            this.loading = false;
          });
      });
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
