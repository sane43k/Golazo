import { inject, Injectable } from "@angular/core";
import { FootballService } from './../../services/football.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as MatchesActions from './matches.actions';

@Injectable()
export class MatchesEffects {
    private actions$ = inject(Actions);
    private footballService = inject(FootballService);

    loadMatches$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MatchesActions.loadMatches),
            mergeMap(() =>
                this.footballService.getLiveMatches().pipe(
                    map(res => MatchesActions.loadMatchesSuccess({ matches: res.response })),
                    catchError(error => of(MatchesActions.loadMatchesFailure({ error })))
                )
            )
        )
    );

}
