import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuIcon = faBars;
  @ViewChild('menuCheckbox') menuCheckbox!: ElementRef<HTMLInputElement>;

  closeMenu() {
    this.menuCheckbox.nativeElement.checked = false;
  }
}
