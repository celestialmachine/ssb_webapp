export interface IBudgetItem {
  id: number;
  name: string;
  description: string;
  occurence: Occurence;
  occurenceDay: number;
  amount: number;
}

enum Occurence {
  None,
  Monthly,
  Weekly,
  BiWeekly
}
