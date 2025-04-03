import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  closeOffcanvas(event: Event) {
    const el = event.target as HTMLElement;
  
    // Solo cerramos si el click fue en un <a>
    if (el.tagName.toLowerCase() === 'a') {
      const offcanvasEl = document.getElementById('sidebarResponsive');
      if (offcanvasEl) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }
      }
    }
  }
}
