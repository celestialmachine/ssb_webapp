import { Component } from '@angular/core';
import { IBudgetItem } from 'src/app/ibudget-item'

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent {
  item?: IBudgetItem;
}
