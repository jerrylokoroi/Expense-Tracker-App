interface HeaderProps {
  balance: number;
}

const Header: React.FC<HeaderProps> = ({ balance }) => {
  const isPositive = balance >= 0;

  return (
    <header className="glass-dark rounded-3xl shadow-2xl p-6 sm:p-8 slide-in-up border-2 border-white/60">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Title Section */}
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Expense Tracker
            </h1>
          </div>
          <p className="text-gray-600 text-sm font-medium">Manage your finances professionally ✨</p>
        </div>
        
        {/* Balance Card */}
        <div className="relative group">
          <div className={`absolute -inset-1 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-300 ${
            isPositive 
              ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
              : 'bg-gradient-to-r from-red-400 to-rose-500'
          }`}></div>
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl border-2 border-white/80">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></span>
              Current Balance
            </p>
            <p className={`text-3xl sm:text-4xl font-bold ${
              isPositive 
                ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
                : 'bg-gradient-to-r from-red-600 to-rose-600'
            } bg-clip-text text-transparent`}>
              KSh {Math.abs(balance).toFixed(2)}
            </p>
            {!isPositive && (
              <p className="text-xs text-red-500 mt-2 font-semibold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Negative Balance
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;