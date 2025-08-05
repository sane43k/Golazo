import { Component } from '@angular/core';
import { PlayerComponent } from "../../components/player/player.component";

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [
    PlayerComponent
  ],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss'
})
export class PlayerPageComponent {

}
