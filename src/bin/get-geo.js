#!/usr/bin/env node

import getGeo from '..';

getGeo(process.argv[process.argv.length - 1]).then((data) => {
  console.log(data);
});
