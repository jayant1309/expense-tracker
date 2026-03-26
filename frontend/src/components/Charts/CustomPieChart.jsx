import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomPieChart = ({
  data = [],
  label = "",
  totalAmount = "",
  colors = [],
  showTextAnchor = false,
}) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="w-full h-64 flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={3}
            label={showTextAnchor}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Total in center */}
      <div className="absolute text-center">
        <h5 className="text-sm font-medium text-gray-500">{label}</h5>
        <h2 className="text-lg font-semibold text-gray-800">{totalAmount}</h2>
      </div>
    </div>
  );
};

export default CustomPieChart;
