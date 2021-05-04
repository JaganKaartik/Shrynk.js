import React from 'react';
import { VictoryTooltip, VictoryPie } from 'victory';
import InfoModal from './InfoModal';

export default function ChartDashboard(props) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-900  flex flex-1 h-100 flex-grow flex-col overflow-hidden px-6 py-8">
      <div>
        <div className="analytics-card mx-auto rounded-xl shadow-md overflow-hidden md:max-w-xl">
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
      <div className="py-5 w-full analytics-card mx-auto rounded-xl shadow-md overflow-hidden">
        {props.myData.dataPresent && (
          <div>
            <h1 className="flex justify-center text-2xl font-extrabold custom-card-text tracking-tight font-mono">
              Total URL Visits
            </h1>
            <VictoryPie
              colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
              data={props.myData.chartData}
              labels={({ datum }) => datum.y}
              style={{ labels: { fill: 'navy' } }}
              labelComponent={
                <VictoryTooltip
                  text={({ datum }) => datum.x}
                  constrainToVisibleArea
                />
              }
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: (props) => {
                            return <InfoModal data={props.datum} />;
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
