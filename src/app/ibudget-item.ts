export interface IBudgetItem {
  id: number;
  name: string;
  description: string;
  occurrence: Occurrence;
  occurenceDay: number;
  amount: number;
}

enum Occurrence {
  None = 0,
  Monthly = 1,
  Weekly = 2,
  BiWeekly = 3
}
