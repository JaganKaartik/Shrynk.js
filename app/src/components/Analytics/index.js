import React, { useEffect } from 'react';
import { totalVisitsURLData } from './analytics.utils';
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
} from 'recharts';

export default function AnalyticsDashboard() {
  // useEffect(() => {

  const data = totalVisitsURLData().then((resp) => resp);
  console.log(data);

  // }, []);
  return (
    <div>
      <div>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}
