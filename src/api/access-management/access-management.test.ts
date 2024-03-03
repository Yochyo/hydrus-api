import { describe, it } from 'node:test';
import HydrusApi from '../hydrus-api';
import assert from 'node:assert/strict';

describe('access-management', () => {
  const api = new HydrusApi({ host: 'https://desktop-hp.peacock-boa.ts.net/', accessKey: '1961a1878a2e8f8899ac992805b8daa415fbc514f412966f26e7c59318e9f876' });

  it('api-version', async () => {
    const res = await api.getApiVersion();
    assert.equal(typeof res.version);
  });
});
