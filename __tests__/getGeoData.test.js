import axios from 'axios';
import getGeoData from '../src/getGeoData';

jest.mock('axios');

it('getGeoData', () => {
  expect.assertions(1);

  const resp = { city: 'spb', country: 'russia' };
  axios.get.mockImplementation(() => Promise.resolve({ data: resp }));

  return getGeoData('192.168.1.10', axios.get).then((data) => {
    expect(data).toEqual(resp);
  });
});
