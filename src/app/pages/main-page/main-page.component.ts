import { Component } from '@angular/core';
import { MainComponent } from "../../components/main/main.component";
import { MatchesComponent } from "../../components/matches/matches.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MainComponent,
    MatchesComponent
],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
