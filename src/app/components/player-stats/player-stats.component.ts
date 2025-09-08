import { Component, OnInit } from '@angular/core';
import { BarChartComponent } from "../ui-kit/bar-chart/bar-chart.component";
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { searchPlayerStatsByIDAndSeason } from '../../store/player/player.actions';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { IPlayerStats } from '../../interfaces/player.interface';
import { selectPlayerFailure, selectPlayerLoading, selectPlayerStatistics } from '../../store/player/player.selectors';
import { StatusComponent } from "../ui-kit/status/status.component";

@Component({
  selector: 'app-player-stats',
  standalone: true,
  imports: [
    BarChartComponent,
    NgIf,
    NgFor,
    AsyncPipe,
    StatusComponent
],
  templateUrl: './player-stats.component.html',
  styleUrl: './player-stats.component.scss'
})
export class PlayerStatsComponent implements OnInit {
  statistics$?: Observable<IPlayerStats[]>;
  loading$?: Observable<boolean>;
  error$?: Observable<any>;

  constructor(
    private store: Store,
    private router: ActivatedRoute,
  ) { };

  ngOnInit(): void {
    let playerID = this.getPlayerID();

    this.store.dispatch(searchPlayerStatsByIDAndSeason({ playerID, playerSeason: '2023' }));
    this.statistics$ = this.store.select(selectPlayerStatistics);
    this.loading$ = this.store.select(selectPlayerLoading);
    this.error$ = this.store.select(selectPlayerFailure);
  };

  getPlayerID() {
    return this.router.snapshot.paramMap.get('id');
  };

}
