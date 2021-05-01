import React, { useEffect, useState } from 'react';
import AnalyticsSVG from '../../assets/images/analytics.svg';
import { totalVisitsURLData } from './analytics.utils';
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';

export default function AnalyticsDashboard() {
  const [AnalyticsData, setAnalyticsData] = useState('');

  useEffect(() => {
    //  themeToggleHandler();
    async function fetchAnalyticsData() {
      const result = await totalVisitsURLData();
      setAnalyticsData(result);
    }
    fetchAnalyticsData();
  }, []);

  const myData = AnalyticsData;

  return (
    <div className="flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      <img
        className="h-auto w-full object-cover md:flex-shrink-0 "
        src={AnalyticsSVG}
        alt="loading..."
        style={{ maxWidth: '450px', margin: '5px auto 0' }}
      />
      <div className="custom-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
              Total Visits on all URLs
            </div>
            <p className="def-dash-card block mt-1 text-lg leading-tight font-medium custom-card-text hover:underline"></p>
          </div>
        </div>
        <div className="flex justify-center items-center h-96 w-full object-cover md:flex-shrink-0">
          <div>
            <XYPlot xType="ordinal" height={300} width={500}>
              <XAxis />
              <YAxis />
              <VerticalBarSeries cluster="2015" color="#25939A" data={myData} />
            </XYPlot>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
