import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { ILiveMatchApiResponse } from '../interfaces/match.interface';
import { ITeamInfoApiResponse } from '../interfaces/team.interface';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl: string = 'https://v3.football.api-sports.io';
  private headers: HttpHeaders = new HttpHeaders({
    'x-apisports-key': 'Paste your x-apisports-key',
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

  getTeamInfoByID(teamID: string | null): Observable<ITeamInfoApiResponse> {
    return this.http.get<ITeamInfoApiResponse>(
      `${this.apiUrl}/teams?id=${teamID}`,
      {
        headers: this.headers
      }
    );
  };

  getTeamsInfoByName(teamName: FormControl): Observable<ITeamInfoApiResponse> {
    return this.http.get<ITeamInfoApiResponse>(
      `${this.apiUrl}/teams?search=${teamName}`,
      {
        headers: this.headers
      }
    );
  };

}
