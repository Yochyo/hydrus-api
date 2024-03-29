import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import HydrusApi from '../../../hydrus-api';
import { addFileResponse } from '../../add-files/schemas';
import { readFile } from 'node:fs/promises';
import * as fs from 'fs';
import { api } from '../../__test__/global.test';

describe('add-file', () => {
  it('add-file-by-path', async () => {
    // todo test in browser
    const res = await api.addFile({ bytes: await readFile('src/api/add-files/__test__/image.png') });
    console.log(res);
    assert.ok(addFileResponse.parse(res));
  });
});
