import axios, { type AxiosRequestConfig } from 'axios';
import { objectKeysToCamelCaseV2, objectKeysToSnakeCaseV2 } from 'keys-converter';
import qs from 'qs';
import HydrusApi from '../hydrus-api';
export abstract class BaseApi {
  constructor(private readonly auth: { host: string; accessKey?: string }) {}

  protected async request<T>({
    method,
    endpoint,
    args = {},
    headers = {},
    axiosArgs = {},
  }: {
    method: 'GET' | 'POST';
    endpoint: string;
    args?: object;
    headers?: AxiosRequestConfig['headers'];
    axiosArgs?: Partial<AxiosRequestConfig>;
  }): Promise<T> {
    let request: AxiosRequestConfig = {
      url: `${this.auth.host}${endpoint}`,
      paramsSerializer: params => qs.stringify(params),
      headers: {
        'Hydrus-Client-API-Access-Key': this.auth.accessKey,
      },
      method,
      ...axiosArgs,
    };

    if (method == 'GET') {
      const argsWithStringifiedLists = Object.fromEntries(
        Object.entries(args).map(([key, value]) => [key, Array.isArray(value) ? JSON.stringify(value) : value])
      );
      request = { ...request, params: argsWithStringifiedLists };
    }
    if (method == 'POST') {
      request = { ...request, data: args, headers: { ...request.headers, ...HydrusApi.CONTENT_TYPE_JSON, ...headers } };
    }

    const res = await axios.request(request);
    return res.data;
  }
}
