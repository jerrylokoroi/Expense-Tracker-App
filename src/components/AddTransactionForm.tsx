import { useState } from "react";
import { Transaction } from "../types/Transaction";

interface AddTransactionFormProps {
  onAdd: (transaction: Transaction) => void;
}

const AddTransactionForm: React.FC<AddTransactionFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    const transaction: Transaction = {
      id: crypto.randomUUID(),
      title,
      amount: parseFloat(amount),
      description,
      category,
      type,
      date: new Date().toISOString(),
    };

    onAdd(transaction);
    setTitle("");
    setDescription("");
    setAmount("");
    setCategory("");
    setType("expense");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-dark p-8 rounded-3xl shadow-2xl border-2 border-white/50 slide-in-up hover:shadow-blue-200/50 transition-shadow duration-300"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
        Add New Transaction
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            placeholder="e.g., Salary, Groceries, etc."
            className="w-full border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 p-3 rounded-xl transition-all duration-200 outline-none bg-white/80"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Add details about this transaction..."
            className="w-full border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 p-3 rounded-xl resize-none transition-all duration-200 outline-none bg-white/80"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Amount *
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">KSh</span>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                className="w-full border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 p-3 pl-14 rounded-xl transition-all duration-200 outline-none bg-white/80"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              placeholder="e.g., Food, Transport"
              className="w-full border-2 border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 p-3 rounded-xl transition-all duration-200 outline-none bg-white/80"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Transaction Type *
          </label>
          <div className="flex gap-4">
            <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              type === "income"
                ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-400 shadow-md"
                : "bg-white/80 border-gray-200 hover:border-green-300"
            }`}>
              <input
                type="radio"
                name="type"
                value="income"
                checked={type === "income"}
                onChange={() => setType("income")}
                className="w-4 h-4 text-green-600 focus:ring-green-500"
              />
              <span className={`font-semibold ${type === "income" ? "text-green-700" : "text-gray-600"}`}>
                💰 Income
              </span>
            </label>
            <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              type === "expense"
                ? "bg-gradient-to-r from-red-50 to-rose-50 border-red-400 shadow-md"
                : "bg-white/80 border-gray-200 hover:border-red-300"
            }`}>
              <input
                type="radio"
                name="type"
                value="expense"
                checked={type === "expense"}
                onChange={() => setType("expense")}
                className="w-4 h-4 text-red-600 focus:ring-red-500"
              />
              <span className={`font-semibold ${type === "expense" ? "text-red-700" : "text-gray-600"}`}>
                💸 Expense
              </span>
            </label>
          </div>
        </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-6 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800"
      >
        ✨ Add Transaction
      </button>
      </div>
    </form>
  );
};

export default AddTransactionForm;