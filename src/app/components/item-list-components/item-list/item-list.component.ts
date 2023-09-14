import { Component, OnInit } from '@angular/core';
import { SsbApiService } from '../../../ssb-api.service';
import { BudgetItemDto } from '../budget-item/budget-item-dto';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{

  items: BudgetItemDto[] = [];

  constructor(private api: SsbApiService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.api.getItems().subscribe(items => this.items = items);
  }

  addItem(value: BudgetItemDto): void {
    this.api.addItem(value).subscribe({
      next: item => this.recieveNewItem(item),
      error: err => console.log(err),
      complete: () => console.log("addItem() completed")
    });
  }

  //adds newly created budget item to list of items
  //& calls api to retrieve new budget events
  recieveNewItem(item: BudgetItemDto): void {
    this.items.push(item);
    this.getEventsById(item.itemId as number);
  }
  getEventsById(eventId: number): void {
    this.api.addEventsByItem(eventId);
  }

  updateItem(value: BudgetItemDto): void {
    this.api.updateItem(value).subscribe();
  }

  deleteItem(value: BudgetItemDto) {
    //TODO: This is in the wrong order, item should be removed from the list after the api call returns successful deletion.
    this.items = this.items.filter(bi => bi !== value);
    this.api.deleteItem(value.itemId).subscribe();
  }
}
