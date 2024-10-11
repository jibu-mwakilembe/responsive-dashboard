import { Legend } from "@headlessui/react";
import React from "react";
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400,
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 1398,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Apr",
    Expense: 2700,
    Income: 3908,
  },
  {
    name: "May",
    Expense: 1898,
    Income: 4800,
  },
  {
    name: "Jun",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "July",
    Expense: 3490,
    Income: 4300,
  },
  {
    name: "Sept",
    Expense: 4300,
    Income: 2600,
  },
  {
    name: "Aug",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Oct",
    Expense: 2398,
    Income: 3800,
  },
  {
    name: "Dec",
    Expense: 3490,
    Income: 4300,
  },
];
const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

function TransactionChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transactions</strong>
      <div className="w-full mt-4 flex-1">
        <BarChart
          width={730}
          height={300}
          data={data}
          margin={{ top: 20, right: 10, bottom: 0, left: -18 }}
        >
          <CartesianGrid strokeDasharray=" 3 3 0 0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" fill="blue" />
          <Bar dataKey="Expense" fill="orange" />
        </BarChart>
      </div>
    </div>
  );
}

export default TransactionChart;
