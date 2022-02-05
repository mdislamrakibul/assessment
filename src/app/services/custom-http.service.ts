import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  api = 'https://api.quotable.io/';
  constructor(
    private _http: HttpClient,
  ) {
  }
  _getAuthor(page: number): Observable<any> {
    // ?limit = 10 & skip=20
    if (page === 1) {
      return this._http.get(this.api + 'authors')
    }
    return this._http.get(this.api + 'authors?page=' + page)
  }
}

