import GeoLocator from '../src/GeoLocator';

it('getGeoData', async () => {
  const resp = { city: 'spb', country: 'russia' };
  const get = () => Promise.resolve({ data: resp });
  const locator = new GeoLocator({ get });

  const data = await locator.getInfoByIp('192.168.0.1');
  expect(data).toEqual(resp);
});
