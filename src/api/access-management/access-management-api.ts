import { BaseApi } from '../base-api';
import { type AccessPermission } from './types';

export class AccessManagementApi extends BaseApi {
  async getApiVersion(): Promise<{ version: number; hydrusVersion: number }> {
    return await this.request({ method: 'GET', endpoint: 'api_version' });
  }

  async requestNewPermissions(args: { name: string; basicPermissions: AccessPermission[] }): Promise<{
    accessKey: string;
  }> {
    return await this.request({
      method: 'GET',
      endpoint: 'request_new_permissions',
      args: { ...args, basicPermissions: args.basicPermissions },
    });
  }

  async getSessionKey(): Promise<{
    sessionKey: string;
  }> {
    return await this.request({ method: 'GET', endpoint: 'session_key' });
  }

  async verifyAccessKey(): Promise<{
    basicPermissions: number[];
    humanDescription: string;
  }> {
    return await this.request({ method: 'GET', endpoint: 'verify_access_key' });
  }

  async getService(args: { serviceName: string } | { serviceKey: string }): Promise<{
    service: {
      name: string;
      serviceKey: string;
      type: number;
      typePretty: string;
    };
  }> {
    return await this.request({ method: 'GET', endpoint: 'get_service' });
  }

  async getServices(): Promise<{ services: Record<string, { name: string; type: number; typePretty: string }> }> {
    return await this.request({ method: 'GET', endpoint: 'get_services' });
  }
}
