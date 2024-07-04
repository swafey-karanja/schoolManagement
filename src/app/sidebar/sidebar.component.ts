import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  openNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
      sidenav.style.width = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  }

  closeNav() {
    const closenav = document.getElementById("mySidenav");
    if(closenav) {
      closenav.style.width = "0";
      document.body.style.backgroundColor = "white";
    }
  }
}
