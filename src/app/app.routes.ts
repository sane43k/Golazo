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
            },
            {
                path: 'team/:id',
                loadComponent: () => import('./pages/team-page/team-page.component')
                    .then(c => c.TeamPageComponent),
                data: {
                    teamID: '1' 
                },
            },
        ]
    }
];
