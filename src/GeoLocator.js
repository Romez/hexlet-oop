import ip from 'ip';
import { get } from 'axios';

export default class GeoLocator {
  constructor(config = {}) {
    this.config = {
      url: 'http://ip-api.com/json',
      get,
      ...config,
    };
  }

  async getInfoByIp(ipAddr) {
    if (!ipAddr) {
      return ip.address();
    }

    const url = [this.config.url, ipAddr].join('/');
    const res = await this.config.get(url);
    return res.data;
  }
}
