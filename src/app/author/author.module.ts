import { MatCardModule } from '@angular/material/card';
import { ListItemModule } from './../list-item/list-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';



@NgModule({
  exports: [
    AuthorComponent
  ],
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    ListItemModule,
    MatCardModule
  ]
})
export class AuthorModule { }
