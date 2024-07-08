import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CardsComponent } from "./cards/cards.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { BarGraphComponent } from "./bar-graph/bar-graph.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      CardsComponent,
      PieChartComponent,
      BarGraphComponent]
})
export class AppComponent {
  title = 'schoolManagement';
}
