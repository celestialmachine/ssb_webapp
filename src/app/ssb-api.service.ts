import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBudgetItem } from './ibudget-item';

@Injectable({
  providedIn: 'root'
})
export class SsbApiService {

  private itemsUrl = 'https://localhost:7034/api/BudgetItems'
  constructor(private http: HttpClient) { }

  getItems(): Observable<IBudgetItem[]> {
    return this.http.get<IBudgetItem[]>(this.itemsUrl);
  }
}
