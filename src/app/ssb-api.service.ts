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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getItems(): Observable<BudgetItemDto[]> {
    return this.http.get<BudgetItemDto[]>(this.itemsUrl);
  }

  updateItem(item: BudgetItemDto): Observable<any> {

    return this.http.put(`${this.itemsUrl}/${item.id}`, item, this.httpOptions);
  }

  deleteItem(id: number): Observable<BudgetItemDto> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.delete<BudgetItemDto>(url, this.httpOptions);
  }
}

//updateHero(hero: Hero): Observable < any > {
//  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
//    tap(_ => this.log(`updated hero id=${hero.id}`)),
//    catchError(this.handleError<any>('updateHero')));
//}
