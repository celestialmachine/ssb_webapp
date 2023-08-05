import { Component, OnInit } from '@angular/core';
import { SsbApiService } from '../../../ssb-api.service';
import { BudgetItemDto } from '../budget-item/budget-item-dto';
import { BudgetItemComponent } from '../budget-item/budget-item.component';

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

  deleteItem(value: BudgetItemDto) {
    this.items = this.items.filter(bi => bi !== value);
    //this.api.deleteItem(value.id).subscribe();
  }
}
