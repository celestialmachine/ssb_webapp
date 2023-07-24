import { Component, Input } from '@angular/core';
import { IBudgetItem } from 'src/app/ibudget-item'

@Component({
  selector: 'tr[app-budget-item]',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent{

  @Input() item!: IBudgetItem;

}
