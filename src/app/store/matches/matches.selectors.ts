import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MatchesState } from "./matches.reducer";

export const selectMatchesState = createFeatureSelector<MatchesState>('matchesState');

export const selectMatches = createSelector(
    selectMatchesState,
    state => state.matches
);

export const selectMatchesLoading = createSelector(
    selectMatchesState,
    state => state.loading
)

export const selectMatchesFailure = createSelector(
    selectMatchesState,
    state => state.error
);