#!/usr/bin/env node

import Table from 'cli-table';
import GeoLocator from '..';

const locator = new GeoLocator();

const run = async () => {
  try {
    const data = await locator.getInfoByIp(process.argv[process.argv.length - 1]);
    const table = new Table();
    Object.keys(data).forEach((key) => {
      table.push({
        [key]: data[key],
      });
    });

    console.log(table.toString());
  } catch (e) {
    console.error(e);
  }
};

run();
