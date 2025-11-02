import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({
  totalBalance = 0,
  totalIncome = 0,
  totalExpense = 0,
}) => {
  const balanceData = [
    { name: "Total Balance", amount: Number(totalBalance) || 0 },
    { name: "Total Expenses", amount: Number(totalExpense) || 0 },
    { name: "Total Income", amount: Number(totalIncome) || 0 },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Financial Overview</h5>
      </div>

      <CustomPieChart
        data={Array.isArray(balanceData) ? balanceData : []} // ✅ Safety check
        label="Total Balance"
        totalAmount={`$${totalBalance || 0}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
