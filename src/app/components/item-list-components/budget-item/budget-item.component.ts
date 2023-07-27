import { Component, Input } from '@angular/core';
import { BudgetItemDto } from '../budget-item/budget-item-dto';

@Component({
  selector: 'tr[app-budget-item]',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent{

  @Input() item!: BudgetItemDto;

}
