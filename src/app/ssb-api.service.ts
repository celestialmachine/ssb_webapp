import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BudgetItemDto } from './components/item-list-components/budget-item/budget-item-dto'
import { BudgetEventDto } from './components/event-list-components/budget-event/budget-event-dto';

@Injectable({
  providedIn: 'root'
})
export class SsbApiService {

  //current URLs reflect the local development environment
  private itemsUrl = 'https://localhost:7034/api/BudgetItems'
  private eventsUrl = 'https://localhost:7034/api/BudgetEvents'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  private eventsByItemSource = new BehaviorSubject<BudgetEventDto[]>([]);
  eventsByItem = this.eventsByItemSource.asObservable();

  constructor(private http: HttpClient) { }

  getItems(): Observable<BudgetItemDto[]> {
    return this.http.get<BudgetItemDto[]>(this.itemsUrl);
  }
  getEvents(): Observable<BudgetEventDto[]> {
    return this.http.get<BudgetEventDto[]>(this.eventsUrl);
  }
  getEventsByItem(itemId: number): Observable<BudgetEventDto[]> {
    return this.http.get<BudgetEventDto[]>(`${this.eventsUrl}/byitem/${itemId}`);
  }
  //Called by item list when new item is added
  addEventsByItem(itemId: number): void {
    this.getEventsByItem(itemId).subscribe(events => this.eventsByItemSource.next(events));
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
