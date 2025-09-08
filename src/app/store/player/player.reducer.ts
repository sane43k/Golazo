import { createReducer, on } from "@ngrx/store";
import { IPlayerProfile, IPlayerStats } from "../../interfaces/player.interface";
import * as PlayerActions from "./player.actions";

export interface PlayerState {
    player: IPlayerProfile | null;
    statistics: IPlayerStats[];
    loading: boolean;
    error: any;
};

export const initialState: PlayerState = {
    player: null,
    statistics: [],
    loading: false,
    error: null
};

export const playerReducer = createReducer(
    initialState,
    on(PlayerActions.searchPlayerByID, state => ({
        ...state,
        loading: true,
    })),
    on(PlayerActions.loadPlayerSuccess, (state, { player }) => ({
        ...state,
        loading: false,
        ...player
    })),
    on(PlayerActions.loadPlayerFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(PlayerActions.searchPlayerStatsByIDAndSeason, state => ({
        ...state,
        loading: true,
    })),
    on(PlayerActions.loadPlayerStatsSuccess, (state, { statistics }) => ({
        ...state,
        loading: false,
        statistics,
    })),
    on(PlayerActions.loadPlayerStatsFailure, (state, { error }) => ({
        ...state,
        loading: false,
    })),
);