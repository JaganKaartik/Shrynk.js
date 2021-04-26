import { getAllURLS } from '../../helpers/api.helper';
import { getTotalVistsForURLInfo } from '../../helpers/analytics.helper';

export const totalVisitsURLData = async () => {
  const fetchedData = await getAllURLS();
  var dataArray = [];
  fetchedData.data.forEach(async (fetchedDataItem) => {
    const TotalVisits = await getTotalVistsForURLInfo(fetchedDataItem.urlCode);
    let totalVisitsObj = {
      urlCode: fetchedDataItem.urlCode,
      visits: TotalVisits.visits,
    };
    dataArray.push(totalVisitsObj);
  });
  console.log(dataArray);
  return dataArray;
};
