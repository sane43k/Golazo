import { createAction, props } from "@ngrx/store";
import { ITeamSquad } from "../../interfaces/team.interface";

export const searchTeamSquadByTeamID = createAction(
    '[Team] Search Team Squad By Team ID',
    props<{ teamID: string | null }>()
);
export const loadTeamSquadSuccess = createAction(
    '[Team] Load Team Squad Success',
    props<{ teamSquad: ITeamSquad }>()
);
export const loadTeamSquadFailure = createAction(
    '[Team] Load Team Squad Failure',
    props<{ error: any }>()
);
