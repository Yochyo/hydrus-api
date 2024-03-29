import { BaseApi } from './api/base-api';
import { type AxiosRequestConfig } from 'axios';
import { AccessManagementApi } from './api/access-management/access-management-api';
import { AddUrlApi } from './api/add-tags/add-tag-api';
import { GetFilesApi } from './api/get-files/get-files-api';
import { AddFileApi } from './api/add-files/add-file-api';

/**
 * https://github.com/ilyamkin/dev-to-js
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
    });
  });
}

class HydrusApi extends BaseApi {
  static CONTENT_TYPE_JSON: AxiosRequestConfig['headers'] = { 'Content-Type': 'application/json' };
  static CONTENT_TYPE_STREAM: AxiosRequestConfig['headers'] = { 'Content-Type': 'application/octet-stream' };
}
interface HydrusApi extends AccessManagementApi, AddFileApi, AddUrlApi, GetFilesApi {}
applyMixins(HydrusApi, [AccessManagementApi, AddFileApi, AddUrlApi, GetFilesApi]);

export default HydrusApi;
