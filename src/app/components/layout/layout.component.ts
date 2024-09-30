import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '@components/navbar/navbar.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  isDrawerOpen = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
