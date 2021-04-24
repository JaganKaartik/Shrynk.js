import { getAllURLS } from '../../helpers/api.helper';
import { getTotalVistsForURLInfo } from '../../helpers/analytics.helper';

/*
userURLData = [{
  urlcode,activation,expiry,totalvisits
}]
*/
export const userURLData = async () => {
  const fetchedData = await getAllURLS();
  const tableBaseData = [];
  fetchedData.data.forEach(async (fetchedDataItem) => {
    const activation = new Date(Date.parse(fetchedDataItem.activation));
    const expiry = new Date(Date.parse(fetchedDataItem.expiry));
    const TotalVisits = await getTotalVistsForURLInfo(fetchedDataItem.urlCode);
    const obj = {
      urlCode: fetchedDataItem.urlCode,
      activation,
      expiry,
      visits: TotalVisits.visits,
    };
    tableBaseData.push(obj);
  });
  return tableBaseData;
};

export const totalVisitsURLData = async () => {
  const totalData = await userURLData();
  let dataArray = [];
  totalData.forEach((e) => {
    console.log(e);
    // const obj = {
    //   urlCode: element.urlCode,
    //   visits: element.visits,
    // };
    // dataArray.push(obj);
  });
  return dataArray;
};
