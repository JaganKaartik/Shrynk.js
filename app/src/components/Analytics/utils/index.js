import { getAllURLS } from '../../../helpers/api.helper';
import { getTotalVistsForURLInfo } from '../../../helpers/analytics.helper';

export const totalVisitsURLData = async () => {
  /*
  params = yes (Inclue just urlcodes)
  params = no (Include all data)
  */
  const fetchedData = await getAllURLS('yes');
  if (fetchedData.success) {
    const chartData = [];
    for (let url of fetchedData.urlCodes) {
      const TotalVisits = await getTotalVistsForURLInfo(url, 'yes');
      chartData.push({
        x: `https://shrynk.jagankaartik.live/${TotalVisits.urlCode}`,
        y: TotalVisits.visits,
      });
    }
    // Check if all visits are 0
    chartData.sort((a, b) => (a.y < b.y ? 1 : -1));
    const allVisitsZero = chartData.every((e) => e.x === 0);
    return { chartData, allVisitsZero, dataPresent: true };
  } else {
    if (fetchedData.message === 'Insufficent URL Data')
      return { dataPresent: false, allVisitsZero: true };
  }
};
