import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return <div className="card">
    <div className="flex items-center justify-between">
        <div className="">
            <h5 className="text-lg">Expense Overview</h5>
            <p className="text-xs text">
                Track your spending trends over time and gain insights into where
                your money gors.
                </p> 
                </div>
                 <button className="" onClick={onExpenseIncome}>
                    <LuPlus className="" />
                    Add Expense
                    </button>
                    </div>

                    <div className="">

                        </div>
                        </div>;


};

export default ExpenseOverview;
