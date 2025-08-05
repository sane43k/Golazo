import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FootballService } from "../../services/football.service";
import * as TeamsActions from "./teams.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class TeamsEffects {
    private actions$ = inject(Actions);
    private footballService = inject(FootballService);

    searchTeamsByName$ = createEffect(() => 
        this.actions$.pipe(
            ofType(TeamsActions.searchTeamsByName),
            mergeMap(action => 
                this.footballService.getTeamsInfoByName(action.teamName).pipe(
                    map(res => TeamsActions.loadTeamsSuccess({ teams: res.response })),
                    catchError(error => of(TeamsActions.loadTeamsFailure({ error })))
                )
            )
        )
    );

    searchTeamByID$ = createEffect(() => 
        this.actions$.pipe(
            ofType(TeamsActions.searchTeamByID),
            mergeMap(action => 
                this.footballService.getTeamInfoByID(action.teamID).pipe(
                    map(res => TeamsActions.loadTeamsSuccess({ teams: res.response })),
                    catchError(error => of(TeamsActions.loadTeamsFailure({ error })))
                )
            )
        )
    );
}