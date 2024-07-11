import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { SchoolDetailsComponent } from '../school-details/school-details.component';

@Component({
  selector: 'app-schools-page',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SchoolDetailsComponent
  ],
  templateUrl: './schools-page.component.html',
  styleUrl: './schools-page.component.css'
})
export class SchoolsPageComponent {

}
