// src/components/Transactions/ExpenseTransactions.jsx

import React, { useMemo } from "react";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

const ExpenseTransactions = ({ transactions = [], onSeeMore }) => {
  // ✅ Ensure it's always a valid array
  const safeTransactions = Array.isArray(transactions)
    ? transactions
    : [];

  // ✅ UseMemo prevents reformatting on every render
  const recentExpenses = useMemo(() => {
    return safeTransactions
      .filter((item) => item?.amount && item?.date) // skip invalid data
      .slice(0, 5)
      .map((expense) => ({
        ...expense,
        formattedDate: moment(expense.date).format("Do MMM YYYY"),
      }));
  }, [safeTransactions]);

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Expenses</h5>

        <button
          onClick={onSeeMore}
          className="card-btn flex items-center gap-1 text-sm"
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      {/* List */}
      <div className="mt-6">
        {recentExpenses.length > 0 ? (
          recentExpenses.map((expense) => (
            <TransactionInfoCard
              key={expense._id || expense.date}
              title={expense.category || "Unknown"}
              icon={expense.icon}
              date={expense.formattedDate}
              amount={expense.amount}
              type="expense"
              hideDeleteBtn
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No expenses found</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
