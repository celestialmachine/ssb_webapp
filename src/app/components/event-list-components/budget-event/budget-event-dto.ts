import { BudgetItemComponent } from "../../item-list-components/budget-item/budget-item.component";
export interface BudgetEventDto {
  id: number;
  item: BudgetItemComponent;
  date: Date;
  balance: number;
  isPaid: boolean;
  note: string;
}
