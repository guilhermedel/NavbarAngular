import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { fontSizes } from '../../fonts/fontSizes';
import { backgroundColors } from '../../background/backgroundColors';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnChanges {
  faBars = faBars;
  fontSizes = fontSizes;
  backgroundColors = backgroundColors;
  showMenu: boolean = false;
  @Input() backgroundColor: string | 'dark' | 'light' = 'dark';
  @Input() textColor: string;
  @Input() imageColor: string;
  @Input() sidenav: boolean = false;
  @Input() topnav: boolean = true;
  @Input() menuItems: string[];
  @Input() image: 'sm' | 'md' | 'lg' = 'md';
  @Input() fontSize: 'sm' | 'md' | 'lg' = 'md';

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['backgroundColor']) {
      this.backgroundColors['custom'] = this.backgroundColor;
      // this.cdRef.detectChanges();
    }
    console.log(this.backgroundColors)
  }

  handleShowMenu() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }
}
