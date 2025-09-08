import { createAction, props } from "@ngrx/store";
import { IPlayerProfile, IPlayerStats } from "../../interfaces/player.interface";

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

export const searchPlayerStatsByIDAndSeason = createAction(
    '[Player] Search Player Statistics By ID And Season',
    props<{ playerID: string | null, playerSeason: string | null }>()
);
export const loadPlayerStatsSuccess = createAction(
    '[Player] Load Player Statistics Success',
    props<{ statistics: IPlayerStats[] }>()
);
export const loadPlayerStatsFailure = createAction(
    '[Player] Load Player Statistics Failure',
    props<{ error: any }>()
);