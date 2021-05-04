import React from 'react';
import PieChart from './Charts/PieChart';
import { displayImage } from './utils/displayImage';

export default function ChartDashboard(props) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900  flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      {props.myData.dataPresent && props.myData.allVisitsZero ? (
        displayImage('SHARE')
      ) : (
        <div className="py-5 w-full analytics-card mx-auto rounded-xl shadow-md overflow-hidden">
          <h1 className="flex justify-center text-2xl font-extrabold custom-card-text tracking-tight font-mono">
            Total URL Visits
          </h1>
          <PieChart myData={props.myData.chartData} />
        </div>
      )}
    </div>
  );
}
