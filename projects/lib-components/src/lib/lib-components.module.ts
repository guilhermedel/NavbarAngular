import { NgModule } from '@angular/core';
import { LibComponentsComponent } from './lib-components.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LibComponentsComponent,
    NavbarComponent
  ],
  imports: [
  ],
  exports: [
    LibComponentsComponent
  ]
})
export class LibComponentsModule { }
