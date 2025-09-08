import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subject, takeUntil } from 'rxjs';
import { ITeamInfo } from '../../../interfaces/team.interface';
import { selectFavoriteTeams } from '../../../store/teams/teams.selectors';
import { addFavoriteTeam, removeFavoriteTeam } from '../../../store/teams/teams.actions';

@Component({
  selector: 'app-fav-btn',
  standalone: true,
  imports: [
  ],
  templateUrl: './fav-btn.component.html',
  styleUrl: './fav-btn.component.scss'
})
export class FavBtnComponent implements OnChanges, OnDestroy {
  @Input() teamInfo?: ITeamInfo;

  isFavorite: boolean = false;
  
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { };

  ngOnChanges(): void {
    if (!this.teamInfo) return;

    this.store.select(selectFavoriteTeams).pipe(
      map(favoriteTeams =>
        favoriteTeams.some(favTeam => favTeam.team.id === this.teamInfo!.team.id)
      ),
      takeUntil(this.destroy$),
    ).subscribe(
      isFav => this.isFavorite = isFav
    );
  };

  toggleTeamToFavorites($event: Event) {
    $event.stopPropagation();

    if (!this.teamInfo) return;

    if (this.isFavorite) {
      this.store.dispatch(removeFavoriteTeam({ team: this.teamInfo! }));
    } else {
      this.store.dispatch(addFavoriteTeam({ team: this.teamInfo! }));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
