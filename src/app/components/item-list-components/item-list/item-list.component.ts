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

  updateItem(value: BudgetItemDto) {
    this.api.updateItem(value).subscribe();
  }

  addItem(value: BudgetItemDto) {
    this.api.addItem(value).subscribe(item => this.items.push(item));
  }

  deleteItem(value: BudgetItemDto) {
    //TODO: This is in the wrong order, item should be removed from the list after the api call returns successful deletion.
    this.items = this.items.filter(bi => bi !== value);
    this.api.deleteItem(value.itemId).subscribe();
  }
}
