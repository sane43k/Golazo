import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { ITeamInfo } from '../../../interfaces/team.interface';
import { RouterModule } from '@angular/router';
import { FavBtnComponent } from "../fav-btn/fav-btn.component";
import { TeamSquadComponent } from "../../team-squad/team-squad.component";
import { NgIf } from '@angular/common';
import { AccordionBtnComponent } from "../accordion-btn/accordion-btn.component";
import { map, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectTeamSquad } from '../../../store/team-squad/team-squad.selectors';

@Component({
  selector: 'app-team-preview-card',
  standalone: true,
  imports: [
    RouterModule,
    FavBtnComponent,
    TeamSquadComponent,
    NgIf,
    AccordionBtnComponent,
  ],
  templateUrl: './team-preview-card.component.html',
  styleUrl: './team-preview-card.component.scss'
})
export class TeamPreviewCardComponent implements OnChanges, OnDestroy {
  @Input() teamInfo?: ITeamInfo;

  isSquadOpen: boolean = false;

  private destroy$ = new Subject<void>();

  constructor(private store: Store) { };

  ngOnChanges(): void {
    if (!this.teamInfo) return;

    this.store.select(selectTeamSquad).pipe(
      map(teamSquad => teamSquad?.team.id === this.teamInfo?.team.id),
      takeUntil(this.destroy$),
    ).subscribe(
      isOpen => this.isSquadOpen = isOpen
    )
  };

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
