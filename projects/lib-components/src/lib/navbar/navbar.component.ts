import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { fontSizes } from '../../fonts/fontSizes';
import { backgroundColors } from '../../background/backgroundColors';
import { ImageBase64 } from '../../interfaces/image-base64';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnChanges {
  faBars = faBars;
  fontSizes = fontSizes;
  faMagnifyingGlass = faMagnifyingGlass;
  backgroundColors = backgroundColors;
  showMenu: boolean = false;
  imageString: string;
  @Input() backgroundColor: string | 'dark' | 'light' = 'dark';
  @Input() textColor: string;
  @Input() data: any[];
  @Input() imageColor: string;
  @Input() sidenav: boolean = false;
  @Input() topnav: boolean = true;
  @Input() menuItems: string[];
  @Input() imageBase64: ImageBase64;
  @Input() fontSize: 'sm' | 'md' | 'lg' = 'md';

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['backgroundColor']) {
      this.backgroundColors['custom'] = this.backgroundColor;
      if (this.backgroundColor === 'dark') {
        this.textColor = 'white';
      } else if (this.backgroundColor === 'light') {
        this.textColor = 'black';
      }
    }
    if (changes['imageBase64']) {
      console.log(this.imageBase64);
      this.imageString =
        'data:image/' +
        this.imageBase64.type +
        ';base64,' +
        this.imageBase64.base64;
    }
  }

  handleShowMenu() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);
  }

  onSearchChange(search: Event) {
    const searchText = search.target as HTMLInputElement;
    this.data = this.data.filter((data) => {
      for (const val of Object.values(data)) {
        if (
          val &&
          val.toString().toLowerCase().includes(searchText.value.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  }
}
