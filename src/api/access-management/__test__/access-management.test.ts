import { apiVersionResponse } from '../schemas';
import { api } from '../../__test__/global';

describe('access-management', () => {
  it('api-version', async () => {
    const res = await api.getApiVersion();
    expect(apiVersionResponse.parse(res)).toBeTruthy()
  });
  // todo requestNewPermission
});
