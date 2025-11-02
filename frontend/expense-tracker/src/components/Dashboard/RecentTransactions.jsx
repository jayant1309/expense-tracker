// src/components/Transactions/RecentTransactions.jsx

import React, { useMemo } from "react";
import moment from "moment";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

const RecentTransactions = ({ transactions = [], onSeeMore }) => {
  // ✅ Ensure safe array
  const safeTransactions = Array.isArray(transactions)
    ? transactions
    : [];

  // ✅ Memoize processing to prevent heavy re-renders
  const recentTransactions = useMemo(() => {
    return safeTransactions
      .filter((item) => item?.amount && item?.date)
      .slice(0, 5)
      .map((item) => ({
        ...item,
        formattedDate: moment(item.date).format("Do MMM YYYY"),
      }));
  }, [safeTransactions]);

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Recent Transactions</h5>

        <button
          className="card-btn flex items-center gap-1 text-sm"
          onClick={onSeeMore}
        >
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      {/* List */}
      <div className="mt-6">
        {recentTransactions.length > 0 ? (
          recentTransactions.map((item) => (
            <TransactionInfoCard
              key={item._id || item.date}
              title={
                item.type === "expense"
                  ? item.category || "Unknown"
                  : item.source || "Income"
              }
              icon={item.icon}
              date={item.formattedDate}
              amount={item.amount}
              type={item.type}
              hideDeleteBtn
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">
            No recent transactions found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
