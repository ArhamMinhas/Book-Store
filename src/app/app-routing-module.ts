import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { BookDetail } from './pages/book-detail/book-detail';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book/:id', component: BookDetail },
  { path: 'about', component: About },
  { path: '**', component: NotFound } // wildcard for unmatched routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
