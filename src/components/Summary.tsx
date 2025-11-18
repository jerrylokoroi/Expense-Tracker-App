import { Transaction } from "../types/Transaction";

interface SummaryProps {
  transactions: Transaction[];
}

const Summary: React.FC<SummaryProps> = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const netSavings = income - expense;

  return (
    <div className="space-y-4 lg:sticky lg:top-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📊</span> Financial Summary
      </h3>
      
      {/* Income Card */}
      <div className="relative group slide-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
        <div className="relative glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Total Income</h3>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            KSh {income.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 font-medium">Total earnings received 💰</p>
        </div>
      </div>

      {/* Expense Card */}
      <div className="relative group slide-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-rose-500 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
        <div className="relative glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Total Expenses</h3>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">
            KSh {expense.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 font-medium">Total amount spent 💸</p>
        </div>
      </div>

      {/* Net Savings Card */}
      <div className="relative group slide-in-up" style={{ animationDelay: '0.3s' }}>
        <div className={`absolute -inset-0.5 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-300 ${
          netSavings >= 0 
            ? 'bg-gradient-to-r from-blue-400 to-indigo-500' 
            : 'bg-gradient-to-r from-gray-400 to-gray-600'
        }`}></div>
        <div className="relative glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider">Net Savings</h3>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300 ${
              netSavings >= 0 
                ? 'bg-gradient-to-br from-blue-400 to-indigo-500' 
                : 'bg-gradient-to-br from-gray-400 to-gray-600'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className={`text-4xl font-bold mb-2 ${
            netSavings >= 0 
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
              : 'bg-gradient-to-r from-gray-700 to-gray-900'
          } bg-clip-text text-transparent`}>
            KSh {Math.abs(netSavings).toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 font-medium">
            {netSavings >= 0 ? '✨ Keep up the great work!' : '⚠️ Review your spending'}
          </p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="relative group slide-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="relative glass-dark rounded-2xl p-5 border-2 border-white/60">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">{transactions.length}</p>
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">Transactions</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-600">
                {transactions.filter(t => t.type === 'income').length}:{transactions.filter(t => t.type === 'expense').length}
              </p>
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">In:Out Ratio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;