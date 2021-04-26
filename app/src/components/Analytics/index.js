import React, { useEffect, useState } from 'react';
import { totalVisitsURLData } from './analytics.utils';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export default function AnalyticsDashboard() {
  const [AnalyticsData, setAnalyticsData] = useState('');

  useEffect(() => {
    //  themeToggleHandler();
    async function fetchAnalyticsData() {
      const result = await totalVisitsURLData();
      const urls = [];
      const urlCodeArray = result.map((element) => element.urlCode);
      console.log(urlCodeArray);
      await setAnalyticsData(urls);
    }
    fetchAnalyticsData();
  }, []);

  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      <div className="custom-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
              Welcome to Analytics
            </div>
            <p className="def-dash-card block mt-1 text-lg leading-tight font-medium custom-card-text hover:underline">
              Currently building the feature! Explore other routes.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center h-96 w-full object-cover md:flex-shrink-0">
        <div>
          <VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            domainPadding={20}
          >
            <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={AnalyticsData} />
            <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </div>
        <div>
          <VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            domainPadding={20}
          >
            <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={AnalyticsData} />
            <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}
