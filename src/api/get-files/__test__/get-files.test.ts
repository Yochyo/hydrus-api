import { api } from '../../__test__/global';
import { apiVersionResponse } from '../../access-management/schemas';

describe('get-files', () => {
  it('get-metadata', async () => {
    const res = await api.getFileMetadata({ hash: '37bc0d62ee746ce5342b9083a0515b961881a2fdaa7ab390b3598151f58ab16a' });
    console.log(res);
    expect(apiVersionResponse.parse(res)).toBeTruthy();
  });
});
