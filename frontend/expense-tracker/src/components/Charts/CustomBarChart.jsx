import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomBarChart = ({ data = [] }) => {
  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p
              key={`tooltip-${index}`}
              className="text-sm text-gray-600 flex justify-between gap-2"
            >
              <span className="font-medium">{entry.name}:</span>
              <span className="text-gray-900">
                ₹{entry.value.toLocaleString("en-IN")}
              </span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-6 rounded-xl shadow-sm p-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Income & Expense Comparison
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f3f3" />
          <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#555" }} />
          <YAxis
            tick={{ fontSize: 12, fill: "#555" }}
            tickFormatter={(v) => `₹${v / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          
          {/* Each Bar = separate category */}
          <Bar dataKey="income" fill="#875CF5" name="Income" radius={[8, 8, 0, 0]} />
          <Bar dataKey="expense" fill="#FA2C37" name="Expense" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
