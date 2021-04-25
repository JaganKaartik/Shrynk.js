import { getAllURLS } from '../../helpers/api.helper';
import { getTotalVistsForURLInfo } from '../../helpers/analytics.helper';

/*
userURLData = [{
  urlcode,activation,expiry,totalvisits
}]
*/
export const userURLData = async () => {
  const fetchedData = await getAllURLS();
  const totalVisitsURLData = [];
  fetchedData.data.forEach(async (fetchedDataItem) => {
    const activation = new Date(Date.parse(fetchedDataItem.activation));
    const expiry = new Date(Date.parse(fetchedDataItem.expiry));
    const TotalVisits = await getTotalVistsForURLInfo(fetchedDataItem.urlCode);
    const totalVisitsObj = {
      urlCode: fetchedDataItem.urlCode,
      activation,
      expiry,
      visits: TotalVisits.visits,
    };
    totalVisitsURLData.push(totalVisitsObj);
  });
  return totalVisitsURLData;
};

// export const totalVisitsURLData = async () => {
//   return dataArray;
// };
