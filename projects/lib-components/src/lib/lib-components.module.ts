import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibComponentsComponent } from './lib-components.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [LibComponentsComponent, NavbarComponent],
  imports: [BrowserModule,FontAwesomeModule],
  exports: [LibComponentsComponent, NavbarComponent],
})
export class LibComponentsModule {}
