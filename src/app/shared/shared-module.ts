import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ import this

import { FilterBarComponent } from '../components/filter-bar/filter-bar';
import { Header } from '../components/header/header';// ✅ ensure HeaderComponent is here

@NgModule({
  declarations: [
    FilterBarComponent,
    Header
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // ✅ needed for routerLink and router-outlet
  ],
  exports: [
    FilterBarComponent,
    Header
  ]
})
export class SharedModule {}
