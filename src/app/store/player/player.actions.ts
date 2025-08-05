import { createAction, props } from "@ngrx/store";
import { IPlayerProfile } from "../../interfaces/player.interface";

export const searchPlayerByID = createAction(
    '[Player] Search Player By ID',
    props<{ playerID: string | null }>()
);
export const loadPlayerSuccess = createAction(
    '[Player] Load Player Success',
    props<{ player: IPlayerProfile }>()
);
export const loadPlayerFailure = createAction(
    '[Player] Load Player Failure',
    props<{ error: any }>()
);