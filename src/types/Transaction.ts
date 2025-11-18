export interface Transaction {
  id: string;
  title: string;
  amount: number;
  description: string;
  category: string;
  type: "income" | "expense";
  date: Date | string;
}