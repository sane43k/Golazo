import { createAction, props } from "@ngrx/store";
import { ITeamInfo } from "../../interfaces/team.interface";
import { FormControl } from "@angular/forms";

export const searchTeamsByName = createAction(
    '[Teams] Search Teams By Name',
    props<{ teamName: FormControl }>()
);
export const loadTeamsSuccess = createAction(
    '[Teams/Team] Load Teams/Team Success',
    props<{ teams: ITeamInfo[] }>()
);
export const loadTeamsFailure = createAction(
    '[Teams/Team] Load Teams/Team Failure',
    props<{ error: any }>()
);
export const searchTeamByID = createAction(
    '[Team] Search Team By ID',
    props<{ teamID: string | null }>()
);