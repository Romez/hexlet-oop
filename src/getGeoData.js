import ip from 'ip';
import axios from 'axios';
import getRequest from './geoRequest';

export default async (requestIp) => {
  if (!requestIp) {
    return ip.address();
  }
  const res = await getRequest(requestIp, axios.get);
  return res.data;
};
