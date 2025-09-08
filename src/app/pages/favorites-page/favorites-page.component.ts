import { Component } from '@angular/core';
import { TeamsComponent } from "../../components/teams/teams.component";

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [
    TeamsComponent,
],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss'
})
export class FavoritesPageComponent {

}
