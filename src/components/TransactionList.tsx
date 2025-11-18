import { Transaction } from "../types/Transaction";

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onDelete,
}) => {
  if (transactions.length === 0)
    return (
      <div className="glass-dark p-12 rounded-3xl shadow-2xl text-center border-2 border-white/50">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <p className="text-gray-500 text-lg font-medium">No transactions yet</p>
        <p className="text-gray-400 text-sm mt-2">Start by adding your first transaction above</p>
      </div>
    );

  return (
    <div className="glass-dark p-8 rounded-3xl shadow-2xl border-2 border-white/50 slide-in-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Transaction History
        </h2>
        <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold">
          {transactions.length} {transactions.length === 1 ? 'transaction' : 'transactions'}
        </span>
      </div>
      
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {transactions.map((t, index) => (
          <div
            key={t.id}
            className="group relative bg-white/60 hover:bg-white/90 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-100"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Colored accent bar */}
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-r-full ${
              t.type === "income" ? "bg-gradient-to-b from-green-400 to-emerald-500" : "bg-gradient-to-b from-red-400 to-rose-500"
            }`}></div>

            <div className="flex justify-between items-start ml-4">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    t.type === "income" 
                      ? "bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200"
                      : "bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200"
                  }`}>
                    <span className="text-2xl">
                      {t.type === "income" ? "💰" : "💸"}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">
                      {t.title}
                    </h3>
                    {t.description && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {t.description}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      {t.category && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                          {t.category}
                        </span>
                      )}
                      <span className="text-gray-500 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(t.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right ml-4 flex flex-col items-end gap-2">
                <p className={`text-2xl font-bold ${
                  t.type === "income" 
                    ? "bg-gradient-to-r from-green-600 to-emerald-600" 
                    : "bg-gradient-to-r from-red-600 to-rose-600"
                } bg-clip-text text-transparent`}>
                  {t.type === "income" ? "+" : "-"}KSh {t.amount.toFixed(2)}
                </p>
                <button
                  onClick={() => onDelete(t.id)}
                  className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-semibold transition-all duration-200 hover:shadow-md active:scale-95 border border-red-200"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;