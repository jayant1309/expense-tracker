// src/utils/chartUtils.js

/**
 * Prepare expense data for bar charts.
 * Groups expenses by date and returns formatted data for Recharts.
 */
export const prepareExpenseBarChartData = (expenses = []) => {
  if (!Array.isArray(expenses)) return [];

  const groupedData = {};

  expenses.forEach((item) => {
    if (!item?.date || typeof item.amount !== "number") return;

    const date = new Date(item.date).toLocaleDateString("en-GB");
    groupedData[date] = (groupedData[date] || 0) + item.amount;
  });

  // ✅ Recharts expects keys like { month, amount }
  return Object.entries(groupedData).map(([date, amount]) => ({
    month: date,
    amount,
  }));
};

/**
 * Prepare expense data for pie charts (category-wise).
 */
export const prepareExpensePieChartData = (expenses = []) => {
  if (!Array.isArray(expenses)) return [];

  const groupedByCategory = {};

  expenses.forEach((item) => {
    if (!item?.category || typeof item.amount !== "number") return;

    groupedByCategory[item.category] =
      (groupedByCategory[item.category] || 0) + item.amount;
  });

  // ✅ Recharts expects keys like { name, amount }
  return Object.entries(groupedByCategory).map(([category, amount]) => ({
    name: category,
    amount,
  }));
};
