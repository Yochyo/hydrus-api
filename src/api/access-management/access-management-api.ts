import { BaseApi } from '../base-api';
import {
  type ApiVersionResponse,
  type GetServiceRequest,
  type GetServiceResponse,
  type GetServicesResponse,
  type RequestNewPermissionRequest,
  type RequestNewPermissionResponse,
  type SessionKeyResponse,
  type VerifyAccessKeyResponse,
} from './types';

export class AccessManagementApi extends BaseApi {
  async getApiVersion(): Promise<ApiVersionResponse> {
    return await this.request({ method: 'GET', endpoint: 'api_version' });
  }

  async requestNewPermissions(args: RequestNewPermissionRequest): Promise<RequestNewPermissionResponse> {
    return await this.request({ method: 'GET', endpoint: 'request_new_permissions', args });
  }

  async getSessionKey(): Promise<SessionKeyResponse> {
    return await this.request({ method: 'GET', endpoint: 'session_key' });
  }

  async verifyAccessKey(): Promise<VerifyAccessKeyResponse> {
    return await this.request({ method: 'GET', endpoint: 'verify_access_key' });
  }

  async getService(args: GetServiceRequest): Promise<GetServiceResponse> {
    return await this.request({ method: 'GET', endpoint: 'get_service', args });
  }

  async getServices(): Promise<GetServicesResponse> {
    return await this.request({ method: 'GET', endpoint: 'get_services' });
  }
}
