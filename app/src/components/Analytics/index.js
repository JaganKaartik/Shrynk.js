import React, { useEffect, useState } from 'react';
import { totalVisitsURLData } from './utils';
import { themeToggleHandler } from '../../helpers/theme.helper';
import AnalyticsSideBar from './AnalyticsSideBar';
import CustomLoader from '../Commons/Loader';

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

  return (
    <div>
      {loaded ? <AnalyticsSideBar myData={AnalyticsData} /> : <CustomLoader />}
    </div>
  );
}
