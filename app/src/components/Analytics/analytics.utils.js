import { getAllURLS } from '../../helpers/api.helper';
import { getTotalVistsForURLInfo } from '../../helpers/analytics.helper';

export const totalVisitsURLData = async () => {
  /*
  params = yes (Inclue just urlcodes)
  params = no (Include all data)
  */
  const fetchedData = await getAllURLS('yes');
  if (fetchedData.success) {
    const chartData = [];
    for (let e of fetchedData.urlCodes) {
      const TotalVisits = await getTotalVistsForURLInfo(e, 'yes');
      chartData.push({
        visits: TotalVisits.visits,
        urls: `https://shrynk.jagankaartik.live/${TotalVisits.urlCode}`,
      });
    }
    // Check if all visits are 0
    const allVisitsZero = chartData.every((e) => e.x === 0);
    return { chartData, allVisitsZero, dataPresent: true };
  } else {
    if (fetchedData.message === 'Insufficent URL Data')
      return { dataPresent: false };
  }
};
