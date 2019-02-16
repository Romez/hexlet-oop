import ip from 'ip';

export default (requestIp) => {
  if (!requestIp) {
    return ip.address();
  }

  return requestIp;
};
