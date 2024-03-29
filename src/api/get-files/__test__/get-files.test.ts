import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { api } from '../../__test__/global.test';
import { apiVersionResponse } from '../../access-management/schemas';

describe('get-files', () => {
  it('api-version', async () => {
    const res = await api.getApiVersion();
    assert.ok(apiVersionResponse.parse(res));
  });
});
