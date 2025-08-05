import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TeamSquadState } from "./team-squad.reducer";

export const selectTeamSquadState = createFeatureSelector<TeamSquadState>('teamSquadState');

export const selectTeamSquad = createSelector(
    selectTeamSquadState,
    state => state.teamSquad
);

export const selectTeamSquadLoading = createSelector(
    selectTeamSquadState,
    state => state.loading
);

export const selectTeamSquadFailure = createSelector(
    selectTeamSquadState,
    state => state.error
);