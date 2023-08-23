import { BudgetItemComponent } from "../../item-list-components/budget-item/budget-item.component";
export interface BudgetEventDto {
  eventId: number;
  itemId: number;
  item: BudgetItemComponent;//This might not be needed
  name: string;
  description: string;
  date: Date;
  dueDate: Date;
  balance: number;
  isPaid: boolean;
  note: string;
}
