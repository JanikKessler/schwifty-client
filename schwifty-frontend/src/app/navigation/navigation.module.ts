import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HeadenavComponent} from './headenav/headenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [HeadenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports:[
    HeadenavComponent
  ]
})
export class NavigationModule { }
