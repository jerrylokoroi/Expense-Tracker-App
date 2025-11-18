import Header from "./components/Header";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Transaction } from "./types/Transaction";
import { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useLocalStorage<Transaction[]>(
    "transactions",
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const balance =
    transactions.reduce(
      (acc, t) => (t.type === "income" ? acc + t.amount : acc - t.amount),
      0
    ) || 0;

  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <div className="loading-screen">
          <div className="loader"></div>
          <div className="loading-text">Expense Tracker</div>
        </div>
      )}

      {/* Main App */}
      <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6 relative z-10">
        <Header balance={balance} />
        
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <AddTransactionForm onAdd={addTransaction} />
            <TransactionList
              transactions={transactions}
              onDelete={deleteTransaction}
            />
          </div>
          
          <div className="lg:col-span-1">
            <Summary transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;