import HydrusApi from '../../../hydrus-api';
import { addFileResponse } from '../schemas';
import { readFile } from 'node:fs/promises';
import { api } from '../../__test__/global';

describe('add-file', () => {
  it('add-file-by-path', async () => {
    // todo test in browser
    const res = await api.addFile({ bytes: await readFile('src/api/add-files/__test__/image.png') });
    console.log(res);
    expect(addFileResponse.parse(res)).toBeTruthy();
  });
});
