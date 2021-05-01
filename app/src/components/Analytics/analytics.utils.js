import { getAllURLS } from '../../helpers/api.helper';
import { getTotalVistsForURLInfo } from '../../helpers/analytics.helper';

export const totalVisitsURLData = async () => {
  const fetchedData = await getAllURLS('yes');
  const newData = [];
  for (let e of fetchedData.urlCodes) {
    const TotalVisits = await getTotalVistsForURLInfo(e, 'yes');
    newData.push({ y: TotalVisits.visits, x: TotalVisits.urlCode });
  }
  return newData;
};
