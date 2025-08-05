import { createReducer, on } from "@ngrx/store";
import * as MatchesActions from "./matches.actions";
import { ILiveMatch } from "../../interfaces/match.interface";

export interface MatchesState {
    matches: ILiveMatch[];
    loading: boolean;
    error: any;
}

export const initialState: MatchesState = {
    matches: [],
    loading: false,
    error: null,
}

export const matchesReducer = createReducer(
    initialState,
    on(MatchesActions.loadMatches, state => ({
        ...state, 
        loading: true
    })),
    on(MatchesActions.loadMatchesSuccess, (state,  { matches } ) => ({
        ...state,
        loading: false,
        matches
    })),
    on(MatchesActions.loadMatchesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
);
