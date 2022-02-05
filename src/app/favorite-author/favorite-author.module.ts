import { MatCardModule } from '@angular/material/card';
import { ListItemModule } from './../list-item/list-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteAuthorComponent } from './favorite-author.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  exports: [
    FavoriteAuthorComponent
  ],
  declarations: [
    FavoriteAuthorComponent
  ],
  imports: [
    CommonModule,
    ListItemModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class FavoriteAuthorModule { }
