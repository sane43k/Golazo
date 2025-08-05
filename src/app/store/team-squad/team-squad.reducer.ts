import { createReducer, on } from "@ngrx/store";
import { ITeamSquad } from "../../interfaces/team.interface";
import * as TeamSquadActions from "./team-squad.actions";

export interface TeamSquadState {
    teamSquad: ITeamSquad | null;
    loading: boolean;
    error: any;
};

export const initialState: TeamSquadState = {
    teamSquad: null,
    loading: false,
    error: null
};

export const teamSquadReducer = createReducer(
    initialState,
    on(TeamSquadActions.searchTeamSquadByTeamID, state => ({
        ...state,
        loading: true
    })),
    on(TeamSquadActions.loadTeamSquadSuccess, (state, { teamSquad }) => ({
        ...state,
        loading: false,
        teamSquad
    })),
    on(TeamSquadActions.loadTeamSquadFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);