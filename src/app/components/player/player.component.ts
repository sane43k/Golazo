import { Component, OnInit } from '@angular/core';
import { PlayerCardComponent } from "../ui-kit/player-card/player-card.component";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { searchPlayerByID } from '../../store/player/player.actions';
import { selectPlayerState } from '../../store/player/player.selectors';
import { Observable } from 'rxjs';
import { PlayerState } from '../../store/player/player.reducer';
import { AsyncPipe, NgIf } from '@angular/common';
import { StatusComponent } from "../ui-kit/status/status.component";

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    PlayerCardComponent,
    NgIf,
    AsyncPipe,
    StatusComponent
],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {
  playerState$?: Observable<PlayerState>;

  constructor(
    private store: Store,
    private router: ActivatedRoute,
  ) { };

  ngOnInit(): void {
    let playerID: string | null = this.getPlayerID();

    this.store.dispatch(searchPlayerByID({ playerID }));
    this.playerState$ = this.store.select(selectPlayerState);
  };

  getPlayerID() {
    return this.router.snapshot.paramMap.get('id');
  };

}
