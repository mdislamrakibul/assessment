import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { FavoriteAuthorComponent } from './favorite-author/favorite-author.component';

const routes: Routes = [
  { path: '', component: AuthorComponent, pathMatch: 'full' },
  { path: 'author', component: AuthorComponent, pathMatch: 'full' },
  { path: 'author-favorite', component: FavoriteAuthorComponent, pathMatch: 'full' },
  { path: '***', redirectTo: 'author', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
