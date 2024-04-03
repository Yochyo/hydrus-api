import HydrusApi from '../../hydrus-api';
import * as fs from 'fs';

const env = fs.readFileSync('.env').toString().split('\n').map(variable => variable.split('=', 2)).reduce((obj, item) => {
  obj[item[0]] = item[1]
  return obj}, {} as any)

export const api = new HydrusApi({
  host: env.TEST_HOST,
  accessKey: env.TEST_TOKEN,
});

// import { describe, it } from 'node:test';
// import assert from 'node:assert/strict';
// import { api } from '../../__test__/global.test';
// import { apiVersionResponse } from '../../access-management/schemas';
//
// describe('access-management', () => {
//   it('api-version', async () => {
//     const res = await api.getApiVersion();
//     assert.ok(apiVersionResponse.parse(res));
//   });
// });