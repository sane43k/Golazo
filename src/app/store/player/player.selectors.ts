import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlayerState } from "./player.reducer";

export const selectPlayerState = createFeatureSelector<PlayerState>('playerState');

export const selectPlayer = createSelector(
    selectPlayerState,
    state => state.player
);

export const selectPlayerStatistics = createSelector(
    selectPlayerState,
    state => state.statistics
);

export const selectPlayerLoading = createSelector(
    selectPlayerState,
    state => state.loading
);

export const selectPlayerFailure = createSelector(
    selectPlayerState,
    state => state.error
);