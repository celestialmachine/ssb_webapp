import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BudgetItemDto } from './components/item-list-components/budget-item/budget-item-dto'
import { BudgetEventDto } from './components/event-list-components/budget-event/budget-event-dto';
//import { BudgetItemComponent } from '../app/components/item-list-components/budget-item/budget-item.component';

@Injectable({
  providedIn: 'root'
})
export class SsbApiService {

  private itemsUrl = 'https://localhost:7034/api/BudgetItems'
  private eventsUrl = 'https://localhost:7034/api/BudgetEvents'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getItems(): Observable<BudgetItemDto[]> {
    return this.http.get<BudgetItemDto[]>(this.itemsUrl);
  }
  getEvents(): Observable<BudgetEventDto[]> {
    return this.http.get<BudgetEventDto[]>(this.eventsUrl);
  }

  updateItem(item: BudgetItemDto): Observable<any> {
    return this.http.put(`${this.itemsUrl}/${item.itemId}`, item, this.httpOptions);
  }

  addItem(item: BudgetItemDto): Observable<any> {
    return this.http.post(this.itemsUrl, item, this.httpOptions);
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
