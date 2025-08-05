import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FootballService } from "../../services/football.service";
import * as TeamSquadActions from "./team-squad.actions";
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TeamSquadEffects {
    private actions$ = inject(Actions);
    private footballService = inject(FootballService);

    searchTeamSquadByTeamID$ = createEffect(() => 
        this.actions$.pipe(
            ofType(TeamSquadActions.searchTeamSquadByTeamID),
            mergeMap(action => 
                this.footballService.getTeamSquadByID(action.teamID).pipe(
                    map(res => TeamSquadActions.loadTeamSquadSuccess({ teamSquad: res.response[0] })),
                    catchError(error => of(TeamSquadActions.loadTeamSquadFailure({ error })))
                )
            )
        )
    );
}