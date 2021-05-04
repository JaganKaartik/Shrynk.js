import React, { useEffect, useState } from 'react';
import { totalVisitsURLData } from './utils';
import { themeToggleHandler } from '../../helpers/theme.helper';
import AnalyticsSideBar from './SideBar';
import CustomLoader from '../Commons/Loader';
import ChartDashboard from './ChartDashboard';
import { displayImage } from './utils/displayImage';

export default function AnalyticsDashboard() {
  const [AnalyticsData, setAnalyticsData] = useState('');
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    themeToggleHandler();
    async function fetchAnalyticsData() {
      const result = await totalVisitsURLData();
      setAnalyticsData(result);
      setLoading(true);
    }
    fetchAnalyticsData();
  }, []);

  function AnalyticsHeader() {
    return (
      <div className="flex justify-center bg-gradient-to-r from-gray-900 to-blue-900 overflow-hidden p-5 sm:p-10">
        <h1 className="flex justify-center text-xl md:text-6xl font-extrabold analytics-title-text">
          Welcome to Shrynk Analytics
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <AnalyticsHeader />
      {loaded ? (
        AnalyticsData.dataPresent ? (
          <div className="grid sm:grid-cols-2 ">
            <AnalyticsSideBar myData={AnalyticsData} />
            <ChartDashboard myData={AnalyticsData} />
          </div>
        ) : (
          <div className="overflow-hidden">{displayImage('ANALYSE')}</div>
        )
      ) : (
        <CustomLoader />
      )}
    </div>
  );
}
