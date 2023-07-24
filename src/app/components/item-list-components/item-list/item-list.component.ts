import { Component, OnInit } from '@angular/core';
import { SsbApiService } from '../../../ssb-api.service';
import { IBudgetItem } from '../../../ibudget-item';
import { BudgetItemComponent } from '../budget-item/budget-item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{

  items: IBudgetItem[] = [];

  constructor(private api: SsbApiService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.api.getItems().subscribe(items => this.items = items);
  }
}
