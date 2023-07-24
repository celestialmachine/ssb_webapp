export interface IBudgetItem {
  id: number;
  name: string;
  description: string;
  occurrence: Occurrence;
  occurrenceDay: number;
  amount: number;
}

export enum Occurrence {
  None,
  Monthly,
  Weekly,
  BiWeekly
}
