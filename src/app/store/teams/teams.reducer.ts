import { createReducer, on } from "@ngrx/store";
import { ITeamInfo } from "../../interfaces/team.interface";
import * as TeamsActions from "./teams.actions";

export interface TeamsState {
    teams: ITeamInfo[];
    favoriteTeams: ITeamInfo[];
    loading: boolean;
    error: any;
}

export const initialState: TeamsState = {
    teams: [],
    favoriteTeams: [],
    loading: false,
    error: null
}

export const teamsReducer = createReducer(
    initialState,
    on(TeamsActions.searchTeamsByName, state => ({
        ...state,
        loading: true
    })),
    on(TeamsActions.loadTeamsSuccess, (state, { teams }) => ({
        ...state,
        loading: false,
        teams
    })),
    on(TeamsActions.loadTeamsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(TeamsActions.searchTeamByID, state => ({
        ...state,
        loading: true
    })),
    on(TeamsActions.addFavoriteTeam, (state, { team }) => ({
        ...state,
        favoriteTeams: [team, ...state.favoriteTeams]
    })),
    on(TeamsActions.removeFavoriteTeam, (state, { team }) => ({
        ...state,
        favoriteTeams: state.favoriteTeams.filter(favTeam => favTeam.team.id !== team.team.id)
    })),
)