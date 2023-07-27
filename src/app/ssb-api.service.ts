import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BudgetItemDto } from './components/item-list-components/budget-item/budget-item-dto'
//import { BudgetItemComponent } from '../app/components/item-list-components/budget-item/budget-item.component';

@Injectable({
  providedIn: 'root'
})
export class SsbApiService {

  private itemsUrl = 'https://localhost:7034/api/BudgetItems'
  constructor(private http: HttpClient) { }

  getItems(): Observable<BudgetItemDto[]> {
    return this.http.get<BudgetItemDto[]>(this.itemsUrl);
  }
}
