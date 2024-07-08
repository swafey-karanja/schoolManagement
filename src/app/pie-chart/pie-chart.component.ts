import { Component, ChangeDetectorRef} from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  public chart: any;
  public chart2: any;
  public chart3: any;

  constructor( private cdr: ChangeDetectorRef) {
    Chart.register(...registerables);
  }

  ngAfterViewInit():void {
    this.createChart();
    this.createChart2();
    this.createChart3();
    this.cdr.detectChanges();
  }

  createChart() {
    if (typeof document !== 'undefined') {
      const canvas = document.getElementById("myChart") as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          this.chart = new Chart("myChart", {
            type: 'doughnut', //this denotes tha type of chart

            data: {// values on X-Axis
              labels: ['Black','Blue', ],
              datasets: [{
          label: 'My First Dataset',
          data: [300, 240],
          backgroundColor: [
            'red',
            'green',
          ],
          hoverOffset: 4
        }],
            },
            options: {
              aspectRatio: 1.2
            }

          });
        }
      }
    }
  }

  createChart2() {
    if (typeof document !== 'undefined') {
      const canvas = document.getElementById("myChart2") as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          this.chart = new Chart("myChart2", {
            type: 'doughnut', //this denotes tha type of chart

            data: {// values on X-Axis
              labels: ['Red','Green', ],
              datasets: [{
          label: 'My First Dataset',
          data: [300, 240],
          backgroundColor: [
            'red',
            'green',
          ],
          hoverOffset: 4
        }],
            },
            options: {
              aspectRatio: 1.2
            }

          });
        }
      }
    }
  }

  createChart3() {
    if (typeof document !== 'undefined') {
      const canvas = document.getElementById("myChart3") as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          this.chart = new Chart("myChart3", {
            type: 'doughnut', //this denotes tha type of chart

            data: {// values on X-Axis
              labels: ['Red','Green', ],
              datasets: [{
                label: 'Dataset',
                data: [300, 240],
                backgroundColor: ['red', 'green'],
                hoverOffset: 4
              }],
            },
            options: {
              aspectRatio: 1.2,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      const labels = context.chart.data.labels;
                      const label = labels ? labels[context.dataIndex] : '';
                      const value = context.raw;
                      return `${label}: ${value}`;
                    }
                  }
                }
              }
            }
          });
        }
      }
    }
  }
}
