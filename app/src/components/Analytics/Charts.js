import React from 'react';

import {
  VictoryBar,
  VictoryLabel,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
} from 'victory';

export default function ChartDashboard() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900  flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      <div>
        <div className="custom-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-xl">
          <div className="md:flex">
            {/* <img
                className="h-auto w-full object-cover md:flex-shrink-0 "
                src={AnalyticsSVG}
                alt="loading..."
                style={{ maxWidth: '450px', margin: '5px auto 0' }}
              /> */}
          </div>
        </div>
      </div>
      <div className="w-full custom-card mx-auto rounded-xl shadow-md overflow-hidden">
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
          <VictoryAxis
            dependentAxis
            style={{
              axisLabel: { padding: 30 },
              tickLabels: { angle: 45 },
            }}
          />
          <VictoryAxis
            style={{
              axisLabel: { padding: 20 },
            }}
          />
          <VictoryBar
            barWidth={({ index }) => index * 2 + 8}
            horizontal
            style={{
              data: { fill: '#0E86D4' },
            }}
            sortKey="y"
            //   data={myData}
            labels={({ datum }) => `y: ${datum.y}`}
            y="visits"
            x="urls"
          />
        </VictoryChart>
      </div>
    </div>
  );
}
