import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [SidenavListComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SidenavListComponent
  ]
})
export class NavigationModule { }
