import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IPlayerStats } from '../../../interfaces/player.interface';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [
    NgxChartsModule,
    NgIf
  ],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {
  @Input() playerStats?: IPlayerStats;

  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);

  data: Array<any> = [];

  ngOnInit(): void {
    this.data = [
      { name: 'Matches', value: this.playerStats?.games?.appearences || 0 },
      { name: 'Lineups', value: this.playerStats?.games.lineups || 0 },
      { name: 'Goals', value: this.playerStats?.goals.total || 0 },
      { name: 'Shots On Target', value: this.playerStats?.shots.on || 0 },
      { name: 'Total Shots', value: this.playerStats?.shots.total || 0 },
      { name: 'Assists', value: this.playerStats?.goals.assists || 0 },
      { name: 'Key Passes', value: this.playerStats?.passes.key || 0 },
      { name: 'Accuracy Passes', value: this.playerStats?.passes.accuracy || 0 },
      { name: 'Dribbles Success', value: this.playerStats?.dribbles.success || 0 },
      { name: 'Dribbles Attempts', value: this.playerStats?.dribbles.attempts || 0 },
      { name: 'Blocks', value: this.playerStats?.tackles.blocks || 0 },
      { name: 'Interceptions', value: this.playerStats?.tackles.interceptions || 0 },
      { name: 'Tackles', value: this.playerStats?.tackles.total || 0 },
      { name: 'Yellow Cards', value: this.playerStats?.cards.yellow || 0 },
      { name: 'Red Cards', value: this.playerStats?.cards.red || 0 },
    ];
  }

}
