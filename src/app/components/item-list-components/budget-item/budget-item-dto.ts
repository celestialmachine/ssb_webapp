export interface BudgetItemDto {
  itemId: number;
  name: string;
  description: string;
  occurrence: number;
  occurrenceDay: number;
  amount: number;
}
export enum Occurrence {
  Never,
  Monthly,
  Weekly,
  BiWeekly
}
