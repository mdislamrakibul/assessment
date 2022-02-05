import { LocalStorageService } from './../services/global.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() data: any = []
  @Input() pageCount: number = 1
  @Input() trigger: boolean = false;

  @Output() reload: any = new EventEmitter<boolean>();
  @Output() pageEmit: any = new EventEmitter<number>();

  public favItemList: any
  public checkList: any
  constructor(
    private localStorage: LocalStorageService
  ) {

  }
  ngOnInit(): void {
    this.checkList = this.localStorage.getItem('favorite')
  }

  ADD(_id: string) {
    this.favItemList = this.localStorage.getItem('favorite')
    let list: any[] = this.data.filter((item: any) => item._id === _id)

    if (this.favItemList && this.favItemList.length > 0) {
      let exists: any[] = this.favItemList.filter((item: any) => item._id === _id)

      if (exists && exists.length) {
        alert('Already added to favorite')
        return
      }

      this.favItemList.push(Object.assign(list[0], { add: true }))
      this.localStorage.setItem('favorite', this.favItemList);
      alert('Added to favorite')
      this.reload.emit(true)
    } else {
      this.localStorage.setItem('favorite', list);
      alert('Added to favorite')
      this.reload.emit(true)
    }
  }

  REMOVE(_id: string) {
    this.favItemList = this.localStorage.getItem('favorite')
    let remainIndex = this.favItemList.filter((item: any) => item._id !== _id);
    this.localStorage.setItem('favorite', remainIndex);
    alert('Removed successfully')
    this.reload.emit(true)
  }

  next() {
    this.pageCount += 1
    this.pageEmit.emit(this.pageCount)
  }
  prev() {
    if (this.pageCount === 1) {
      this.pageEmit.emit(this.pageCount)
      return
    }
    this.pageCount -= 1
    this.pageEmit.emit(this.pageCount)
  }
  check(i: string) {
    if (this.checkList && this.checkList.length > 0) {
      let data = this.checkList.filter((item: any) => item._id === i);
      if (data && data.length > 0) {
        return true
      }
    }
    return false
  }
}
