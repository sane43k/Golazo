import { Component } from '@angular/core';
import { PlayerComponent } from "../../components/player/player.component";
import { PlayerStatsComponent } from "../../components/player-stats/player-stats.component";

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [
    PlayerComponent,
    PlayerStatsComponent
],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss'
})
export class PlayerPageComponent {

}
