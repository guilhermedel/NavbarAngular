import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { fontSizes } from '../../fonts/fontSizes';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faBars = faBars;
  showMenu: boolean = false;
  @Input() backgroundColor: string | 'dark' | 'light';
  @Input() textColor: string;
  @Input() imageColor: string;
  @Input() sidenav: boolean = false;
  @Input() topnav: boolean = true;
  @Input() menuItems: string[];
  @Input() image: 'sm' | 'md' | 'lg' = 'md';
  @Input() fontSize: 'sm' | 'md' | 'lg' = 'md';

  handleShowMenu() {
    this.showMenu = !this.showMenu;
  }
}
