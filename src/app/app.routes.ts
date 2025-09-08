import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/main-layout/main-layout.component')
            .then(c => c.MainLayoutComponent),
        title: 'Main - Golazo',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/main-page/main-page.component')
                    .then(c => c.MainPageComponent),
            },
            {
                path: 'teams-list',
                loadComponent: () => import('./pages/teams-list-page/teams-list-page.component')
                    .then(c => c.TeamsListPageComponent),
                title: 'Teams - Golazo',
            },
            {
                path: 'team/:id',
                loadComponent: () => import('./pages/team-page/team-page.component')
                    .then(c => c.TeamPageComponent),
                title: 'Team - Golazo',
            },
            {
                path: 'player/:id',
                loadComponent: () => import('./pages/player-page/player-page.component')
                    .then(c => c.PlayerPageComponent),
                title: 'Player - Golazo',
            },
            {
                path: 'favorites',
                loadComponent: () => import('./pages/favorites-page/favorites-page.component')
                    .then(c => c.FavoritesPageComponent),
                title: 'Favorites - Golazo',
            },
        ]
    }
];
