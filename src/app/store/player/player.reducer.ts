import { createReducer, on } from "@ngrx/store";
import { IPlayerProfile } from "../../interfaces/player.interface";
import * as PlayerActions from "./player.actions";

export interface PlayerState {
    player: IPlayerProfile | null;
    loading: boolean;
    error: any;
};

export const initialState: PlayerState = {
    player: null,
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
);