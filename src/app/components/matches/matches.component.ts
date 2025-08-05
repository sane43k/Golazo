import { Component, Input, OnInit } from '@angular/core';
import { MatchCardComponent } from "../ui-kit/match-card/match-card.component";
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { StatusComponent } from "../ui-kit/status/status.component";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectMatchesState } from '../../store/matches/matches.selectors';
import { loadMatches } from '../../store/matches/matches.actions';
import { MatchesState } from '../../store/matches/matches.reducer';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [
    MatchCardComponent,
    NgFor,
    NgIf,
    NgClass,
    StatusComponent,
    AsyncPipe
  ],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent implements OnInit {
  @Input() header: string = '';
  matchesState$?: Observable<MatchesState>;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.store.dispatch(loadMatches());
    this.matchesState$ = this.store.select(selectMatchesState);
  };

}
