import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ import this

import { FilterBarComponent } from '../components/filter-bar/filter-bar';
import { Header } from '../components/header/header';// ✅ ensure HeaderComponent is here
import { SidebarComponent } from '../components/sidebar/sidebar';
import { WishlistComponent } from '../components/wishlist/wishlist';
import { Footer } from '../components/footer/footer';

@NgModule({
  declarations: [
    Footer,
    SidebarComponent,
    WishlistComponent,
    FilterBarComponent,
    Header
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // ✅ needed for routerLink and router-outlet
  ],
  exports: [
    Footer,
    SidebarComponent,
    WishlistComponent,
    FilterBarComponent,
    Header

  ]
})
export class SharedModule {}
