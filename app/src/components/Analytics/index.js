import React, { useEffect, useState } from 'react';
import { totalVisitsURLData } from './analytics.utils';
import { themeToggleHandler } from '../../helpers/theme.helper';
import AnalyticsSideBar from './AnalyticsSideBar';

export default function AnalyticsDashboard() {
  const [AnalyticsData, setAnalyticsData] = useState('');

  useEffect(() => {
    themeToggleHandler();
    async function fetchAnalyticsData() {
      const result = await totalVisitsURLData();
      setAnalyticsData(result);
    }
    fetchAnalyticsData();
  }, []);

  const myData = AnalyticsData.chartData;

  return (
    <div>
      <AnalyticsSideBar data={myData} />
    </div>
  );
}
