// Analytics Utils
import { getAllURLS } from '../../helpers/api.helper';

export const basicInfo = async () => {
  const fetchedData = await getAllURLS();
  const tableBaseData = fetchedData.data.forEach((e) => {
    let activation = new Date(Date.parse(e.activation));
    let expiry = new Date(Date.parse(e.expiry));
    let obj = {
      urlcode: e.urlcode,
      activation,
      expiry,
    };
    console.log(obj);
    return {
      urlcode: e.urlcode,
      activation: activation,
      expiry: expiry,
    };
  });
  console.log(tableBaseData);
};
