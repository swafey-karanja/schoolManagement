import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-school-details',
    standalone: true,
    templateUrl: './school-details.component.html',
    styleUrl: './school-details.component.css',
    imports: [
      CommonModule,
      RouterOutlet
    ]
})
export class SchoolDetailsComponent {
  isModalOpen = false;

  people = [
    { SchoolName: 'UA Highschool', Product: 'XYZ', Type: 'Primary', County: 'Kiambu'},
    { SchoolName: 'Shiketsu Highschool', Product: 'MNO', Type: 'IGCSE', County:'Nairobi' },
    { SchoolName: 'USJ Highschool', Product: 'ABC', Type: 'Secondary', County:'Migori' },
    // Add more data as needed
  ];

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['schools/details']);
  }

}
