import { createAction, props } from "@ngrx/store";
import { ILiveMatch } from "../../interfaces/match.interface";

export const loadMatches = createAction('[Matches] Load Matches');
export const loadMatchesSuccess = createAction(
    '[Matches] Load Matches Success',
    props<{ matches: ILiveMatch[] }>()
);
export const loadMatchesFailure = createAction(
    '[Matches] Load Matches Failure',
    props<{ error: any }>()
);