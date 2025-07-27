import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeamCardComponent } from "../ui-kit/team-card/team-card.component";
import { ITeamInfo } from '../../interfaces/team.interface';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from '../../services/football.service';
import { Location, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { StatusComponent } from "../ui-kit/status/status.component";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    TeamCardComponent,
    StatusComponent,
    NgIf
],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  teamInfo?: ITeamInfo;

  private teamID: string | null = '';
  private subscription!: Subscription;

  constructor(
    private router: ActivatedRoute,
    private footballService: FootballService,
    private location: Location
  ) { };

  ngOnInit(): void {
    this.loading = true;

    // this.getTeamIDFromData();
    this.getTeamID();
    this.subscription = this.footballService.getTeamInfoByID(this.teamID)
      .subscribe(res => {
        this.teamInfo = res.response[0];
        this.loading = false;
      });

    // this.teamInfo = (this.location.getState() as { teamInfo: ITeamInfo })?.teamInfo;
    // this.loading = false;
  };

  getTeamID() {
    this.teamID = this.router.snapshot.paramMap.get('id');

    // this.router.paramMap.subscribe(params => {
    //   this.teamID = params.get('id');
    // });
  };

  getTeamIDFromData() {
    this.teamID = this.router.snapshot.data['teamID'];
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
