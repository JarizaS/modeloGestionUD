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
    let el = event.target as HTMLElement;
  
    // Buscar hacia arriba el <a> si se hace clic en un hijo (como <h5>)
    while (el && el.tagName.toLowerCase() !== 'a') {
      el = el.parentElement!;
    }
  
    if (el && el.tagName.toLowerCase() === 'a') {
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
