import { Component, ChangeDetectorRef} from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-bar-graph',
  standalone: true,
  imports: [],
  templateUrl: './bar-graph.component.html',
  styleUrl: './bar-graph.component.css'
})
export class BarGraphComponent {
 public barChart: any;

 constructor( private cdr: ChangeDetectorRef) {
  Chart.register(...registerables);
  }

 ngAfterViewInit(): void{
  this.createbarChart();
  this.cdr.detectChanges();
 }

  createbarChart() {
    if (typeof document !== 'undefined') {
      const canvas = document.getElementById("myBar") as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          this.barChart = new Chart("myBar", {
            type: 'bar', //this denotes tha type of chart

            data: {// values on X-Axis
              labels: ['Zeraki Analytics', 'Zeraki Finance', 'Zeraki Timetable' ],
              datasets: [
                {
                  label: "Primary",
                  data: ['467','576','389' ],
                  backgroundColor: 'blue'
                },
                {
                  label: "Secondary",
                  data: ['542', '542','576'],
                  backgroundColor: 'limegreen'
                },
                {
                  label: "IGCSE",
                  data: ['542', '542','576'],
                  backgroundColor: 'yellow'
                }
              ]
            },
            options: {
              aspectRatio: 3.0
            }

          });
        }
      }
    }
  }
}
