import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TeamsState } from "./teams.reducer";

export const selectTeamsState = createFeatureSelector<TeamsState>('teamsState');

export const selectTeams = createSelector(
    selectTeamsState,
    state => state.teams
);

export const selectFavoriteTeams = createSelector(
    selectTeamsState,
    state => state.favoriteTeams
);

export const selectTeamsLoading = createSelector(
    selectTeamsState,
    state => state.loading
);

export const selectTeamsFailure = createSelector(
    selectTeamsState,
    state => state.error
);