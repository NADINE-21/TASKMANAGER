import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const getBarColor = (entry) => {
  switch (entry?.priority) {
    case 'Low': return '#00BC7D';
    case 'Medium': return '#FE9900';
    case 'High': return '#FF1F57';
    default: return '#00BC7D';
  }
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { priority, count } = payload[0].payload;
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300 text-xs">
        <p className="text-xs font-semibold text-purple-800 mb-1">{priority}</p>
        <p className="text-sm text-gray-600">
          Count: <span className="text-gray-900 font-medium">{count}</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomBarChart = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div className="text-sm text-gray-500">No chart data available.</div>;
  }

  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="priority" tick={{ fontSize: 12, fill: '#555' }} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: '#555' }} stroke="none" />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
          <Bar dataKey="count" radius={[10, 10, 0, 0]} isAnimationActive>
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(entry)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
