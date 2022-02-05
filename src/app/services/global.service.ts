import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
}


@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  public getItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
    return null;
  }
  public clearAll(): void {
    return localStorage.clear();
  }
}