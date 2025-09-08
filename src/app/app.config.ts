import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './store/index';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { MatchesEffects } from './store/matches/matches.effects';
import { TeamsEffects } from './store/teams/teams.effects';
import { TeamSquadEffects } from './store/team-squad/team-squad.effects';
import { PlayerEffects } from './store/player/player.effects';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore(reducers, { metaReducers }),
    provideEffects([
      MatchesEffects, 
      TeamsEffects, 
      TeamSquadEffects,
      PlayerEffects,
    ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouterStore(),
    provideAnimations(),
  ]
};
