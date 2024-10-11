import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const data = [
  { name: "Male", value: 540 },
  { name: "Female", value: 620 },
  { name: "Other", value: 210 },
];
const data2 = [
  { name: "Male", value: 540, fill: "red" },
  { name: "Female", value: 620, fill: "orange" },
  { name: "Other", value: 210, fill: "green" },
];

const RADIAN = Math.PI / 180;
const COLORS = ["blue", "yellow", "orange"];
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) + 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function BuyerChart() {
  const total = data.reduce((acc, entry) => acc + entry.value, 0);
  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-1 flex-col">
      <strong className="text-gray-700 font-medium">Buyer Profile</strong>
      <div className="flex-1 w-full mt-3 text-xs">
        <PieChart width={300} height={300}>
          <Pie
            data={data2}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius={105}
            label={(entry) => `${((entry.value / total) * 100).toFixed(2)}%`}
          >
            {data2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default BuyerChart;
