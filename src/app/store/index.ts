import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { matchesReducer, MatchesState } from '../store/matches/matches.reducer';
import { teamsReducer, TeamsState } from './teams/teams.reducer';
import { teamSquadReducer, TeamSquadState } from './team-squad/team-squad.reducer';
import { PlayerState, playerReducer } from './player/player.reducer';

export interface State {
  matchesState: MatchesState,
  teamsState: TeamsState,
  teamSquadState: TeamSquadState,
  playerState: PlayerState,
}

export const reducers: ActionReducerMap<State> = {
  matchesState: matchesReducer,
  teamsState: teamsReducer,
  teamSquadState: teamSquadReducer,
  playerState: playerReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];