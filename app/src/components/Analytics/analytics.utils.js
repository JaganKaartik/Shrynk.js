import { getAllURLS } from '../../helpers/api.helper';
import { getTotalVistsForURLInfo } from '../../helpers/analytics.helper';

export const totalVisitsURLData = async () => {
  const fetchedData = await getAllURLS('yes');

  if (fetchedData.success) {
    const chartData = [];
    for (let e of fetchedData.urlCodes) {
      const TotalVisits = await getTotalVistsForURLInfo(e, 'yes');
      chartData.push({
        x: TotalVisits.visits,
        y: `https://shrynk.jagankaartik.live/${TotalVisits.urlCode}`,
      });
    }
    // Check if all visits are 0
    console.log(chartData);
    const allVisitsZero = chartData.every((e) => e.x === 0);
    return { chartData, allVisitsZero, dataPresent: true };
  } else {
    if (fetchedData.message === 'Insufficent URL Data')
      return { dataPresent: false };
  }
};
