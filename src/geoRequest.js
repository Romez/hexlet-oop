export default (ip, get) => {
  const url = ['http://ip-api.com/json', ip].join('/');
  return get(url);
};
