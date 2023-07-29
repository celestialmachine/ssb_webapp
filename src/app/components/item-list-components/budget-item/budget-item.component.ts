import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItemDto, Occurrence } from '../budget-item/budget-item-dto';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit{
  //bound properties to toggle button dropdowns with unique attribute values, set uniquely at ngOnInit()
  target: string = "item-collapse";
  bstarget: string = "";

  occurrence: string = "";

  @Input() item!: BudgetItemDto;

  ngOnInit(): void {
    this.target += this.item.id.toString();
    this.bstarget = "#" + this.target;
    this.occurrence = Occurrence[this.item.occurrence];
  }

  @Output() deleteEvent = new EventEmitter<BudgetItemDto>();

  deleteSelf(value: BudgetItemDto) {
    this.deleteEvent.emit(value);
  }
}
