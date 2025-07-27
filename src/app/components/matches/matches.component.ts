import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatchCardComponent } from "../ui-kit/match-card/match-card.component";
import { FootballService } from '../../services/football.service';
import { ILiveMatch } from '../../interfaces/match.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { StatusComponent } from "../ui-kit/status/status.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [
    MatchCardComponent,
    NgFor,
    NgIf,
    NgClass,
    StatusComponent
  ],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent implements OnInit, OnDestroy {
  @Input() header: string = '';
  loading: boolean = false;
  matches: ILiveMatch[] = [];

  private subscription!: Subscription;

  constructor(private footballService: FootballService) { };

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.footballService.getLiveMatches()
      .subscribe(res => {
        this.matches = res.response;
        this.loading = false;
      });
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
