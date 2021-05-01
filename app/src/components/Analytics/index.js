import React, { useEffect, useState } from 'react';
import AnalyticsSVG from '../../assets/images/analytics.svg';
import ShareSVG from '../../assets/images/share.svg';
import TableSVG from '../../assets/images/table1.svg';
import { totalVisitsURLData } from './analytics.utils';
import { themeToggleHandler } from '../../helpers/theme.helper';
import {
  FlexibleXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  XAxis,
  YAxis,
} from 'react-vis';

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

  const CardInfo = AnalyticsData.dataPresent
    ? AnalyticsData.allVisitsZero
      ? { image: ShareSVG, message: 'Share your urls to the world!' }
      : {
          image: AnalyticsSVG,
          message: 'Find your charts below!',
          displayTable: true,
        }
    : { image: TableSVG, message: 'Create and Share your URLs' };

  return (
    <div className="flex flex-1 h-100 w-full flex-grow flex-col overflow-hidden px-6 py-8">
      <div>
        <img
          className="h-auto w-full object-cover md:flex-shrink-0 "
          src={CardInfo.image}
          alt="loading..."
          style={{ maxWidth: '450px', margin: '5px auto 0' }}
        />
      </div>
      <div className="custom-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
              {CardInfo.message}
            </div>
            <p className="def-dash-card block mt-1 text-lg leading-tight font-medium custom-card-text hover:underline"></p>
          </div>
        </div>
      </div>
      <br />
      {CardInfo.displayTable && (
        // <div className="bg-white">
        <FlexibleXYPlot
          stackBy="x"
          xType="ordinal"
          yType="ordinal"
          margin={{ left: 250 }}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Visits" />
          <YAxis title="Shrynked URLs" />
          <HorizontalBarSeries cluster="2015" color="#76939A" data={myData} />
        </FlexibleXYPlot>
        // </div>
      )}
    </div>
  );
}
