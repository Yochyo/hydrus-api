import { RequireAtLeastOne } from 'type-fest';
import { HydrusService, HydrusServiceObject } from '../../common/types';

export enum AccessPermission {
  ImportAndEditURLs = 0,
  ImportAndDeleteFiles = 1,
  EditFileTags = 2,
  SearchAndFetchFiles = 3,
  ManagePages = 4,
  ManageCookiesAndHeaders = 5,
  ManageDatabase = 6,
  EditFileNotes = 7,
  ManageFileRelationships = 8,
  EditFileRatings = 9,
  EditPopups = 10,
  EditFileTimes = 11,
}

export type ApiVersionResponse = {
  version: number;
  hydrus_version: number;
};
export type RequestNewPermissionRequest = {
  name: string;
  basic_permissions: AccessPermission;
};
export type RequestNewPermissionResponse = {
  access_key: string;
};

export type SessionKeyResponse = {
  session_key: string;
};
export type VerifyAccessKeyResponse = {
  basic_permissions: AccessPermission[];
  human_description: string;
};

export type GetServiceRequest = RequireAtLeastOne<{
  service_name: string;
  service_key: string;
}>;
export type GetServiceResponse = { service: HydrusService & { service_key: string } };
export type GetServicesResponse = HydrusServiceObject;
