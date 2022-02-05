import { LocalStorageService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-author',
  templateUrl: './favorite-author.component.html',
  styleUrls: ['./favorite-author.component.css']
})
export class FavoriteAuthorComponent implements OnInit {

  public result: any
  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.result = this.localStorage.getItem('favorite')
  }

  reloadType($event: any) {
    this.ngOnInit()
  }

}
