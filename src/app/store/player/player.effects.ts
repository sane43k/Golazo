import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FootballService } from "../../services/football.service";
import * as PlayerAction from "./player.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class PlayerEffects {
    private actions$ = inject(Actions);
    private footballService = inject(FootballService);

    searchPlayerByID$ = createEffect(() => 
        this.actions$.pipe(
            ofType(PlayerAction.searchPlayerByID),
            mergeMap(action => 
                this.footballService.getPlayerProfileByID(action.playerID).pipe(
                    map(res => PlayerAction.loadPlayerSuccess({ player: res.response[0] })),
                    catchError(error => of(PlayerAction.loadPlayerFailure({ error })))
                )
            )
        )
    );

    searchPlayerStatsByIDAndSeason$ = createEffect(() => 
        this.actions$.pipe(
            ofType(PlayerAction.searchPlayerStatsByIDAndSeason),
            mergeMap(action => 
                this.footballService.getPlayerStatsByIDAndSeason(action.playerID, action.playerSeason).pipe(
                    map(res => PlayerAction.loadPlayerStatsSuccess({ statistics: res.response[0].statistics })),
                    catchError(error => of(PlayerAction.loadPlayerStatsFailure({ error })))
                )
            )
        )
    );
    
}