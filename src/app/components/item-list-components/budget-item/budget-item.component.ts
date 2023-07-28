import { Component, Input, OnInit } from '@angular/core';
import { BudgetItemDto } from '../budget-item/budget-item-dto';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit{
  //bound properties to toggle button dropdowns with unique attribute values, set uniquely at ngOnInit()
  target: string = "item-collapse";
  bstarget: string = "";
  @Input() item!: BudgetItemDto;

  ngOnInit(): void {
    this.target += this.item.id.toString();
    this.bstarget = "#" + this.target;
  }
}
