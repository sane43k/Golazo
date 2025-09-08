import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILiveMatchApiResponse } from '../interfaces/match.interface';
import { ITeamInfoApiResponse, ITeamSquadApiResponse } from '../interfaces/team.interface';
import { IPlayerProfileApiResponse, IPlayerStatsApiResponse } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl: string = 'https://v3.football.api-sports.io';
  private headers: HttpHeaders = new HttpHeaders({
    'x-apisports-key': 'Paste your x-apisports-key here',
  });

  constructor(private http: HttpClient) { };

  getLiveMatches(): Observable<ILiveMatchApiResponse> {
    return this.http.get<ILiveMatchApiResponse>(
      `${this.apiUrl}/fixtures?live=all`,
      {
        headers: this.headers
      }
    );
  };

  getTeamsInfoByName(teamName: string): Observable<ITeamInfoApiResponse> {
    return this.http.get<ITeamInfoApiResponse>(
      `${this.apiUrl}/teams?search=${teamName}`,
      {
        headers: this.headers
      }
    );
  };

  getTeamInfoByID(teamID: string | null): Observable<ITeamInfoApiResponse> {
    return this.http.get<ITeamInfoApiResponse>(
      `${this.apiUrl}/teams?id=${teamID}`,
      {
        headers: this.headers
      }
    );
  };

  getTeamSquadByID(teamID: string | null): Observable<ITeamSquadApiResponse> {
    return this.http.get<ITeamSquadApiResponse>(
      `${this.apiUrl}/players/squads?team=${teamID}`,
      {
        headers: this.headers
      }
    );
  };

  getPlayerProfileByID(playerID: string | null): Observable<IPlayerProfileApiResponse> {
    return this.http.get<IPlayerProfileApiResponse>(
      `${this.apiUrl}/players/profiles?player=${playerID}`,
      {
        headers: this.headers
      }
    );
  };

  getPlayerStatsByIDAndSeason(playerID: string | null, playerSeason: string | null): Observable<IPlayerStatsApiResponse> {
    return this.http.get<IPlayerStatsApiResponse>(
      `${this.apiUrl}/players?id=${playerID}&season=${playerSeason}`,
      {
        headers: this.headers
      }
    );
  };

}
