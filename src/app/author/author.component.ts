import { CustomHttpService } from './../services/custom-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  public result: any = []
  public pageCount: number = 1
  public add: boolean = true;
  constructor(
    private customHttp: CustomHttpService
  ) { }

  ngOnInit(): void {
    console.log('rendering');

    this.getAuthor()
  }

  getAuthor() {
    console.log(this.pageCount);

    this.customHttp._getAuthor(this.pageCount).subscribe(
      (res) => {
        this.result = res.results
        this.pageCount = res.page
      },
      (error) => { },
      () => { }
    );
  }

  pageEmit($event: number) {
    this.pageCount = $event
    this.customHttp._getAuthor(this.pageCount).subscribe(
      (res) => {
        this.result = res.results
        this.pageCount = res.page
      },
      (error) => { },
      () => { }
    );

  }
  reloadType($event: any) {
    console.log($event);
    this.ngOnInit()
  }
}
