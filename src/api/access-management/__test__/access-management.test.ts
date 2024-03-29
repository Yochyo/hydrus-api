import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import HydrusApi from '../../../hydrus-api';
import { apiVersionResponse } from '../schemas';
import { api } from '../../__test__/global.test';

describe('access-management', () => {
  it('api-version', async () => {
    const res = await api.getApiVersion();
    assert.ok(apiVersionResponse.parse(res));
  });
  // todo requestNewPermission
});
