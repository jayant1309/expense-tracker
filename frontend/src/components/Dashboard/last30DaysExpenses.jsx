import React, { useMemo } from "react";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareExpenseBarChartData } from "../../utils/chartUtils";

const Last30DaysExpenses = ({ data = [] }) => {
  // ✅ Safely compute chart data only when "data" changes
  const chartData = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return [];
    try {
      return prepareExpenseBarChartData(data);
    } catch (err) {
      console.error("Error preparing expense chart data:", err);
      return [];
    }
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between mb-3">
        <h5 className="text-lg font-semibold">Last 30 Days Expenses</h5>
      </div>

      {/* ✅ Safe render — avoids crash if chartData is empty */}
      {chartData.length > 0 ? (
        <CustomBarChart data={chartData} />
      ) : (
        <div className="flex items-center justify-center h-[300px]">
          <p className="text-gray-400 text-center">No expense data available</p>
        </div>
      )}
    </div>
  );
};

export default Last30DaysExpenses;
