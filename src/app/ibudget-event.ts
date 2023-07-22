import { BudgetItemComponent } from "./components/item-list-components/budget-item/budget-item.component";

export interface IBudgetEvent {
  id: number;
  item: BudgetItemComponent;
  date: Date;
  balance: number;
  isPaid: boolean;
  note: string;
}
