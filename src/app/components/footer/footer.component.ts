import { Component } from '@angular/core';
import { LogoComponent } from "../ui-kit/logo/logo.component";
import { HoverHighlightDirective } from "../../directives/hover-highlight.directive";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LogoComponent,
    HoverHighlightDirective,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
