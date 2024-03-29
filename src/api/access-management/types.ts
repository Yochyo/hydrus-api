import { type z } from 'zod';
import {
  type apiVersionResponse,
  type getServiceRequest,
  type getServiceResponse,
  type getServicesResponse,
  type requestNewPermissionRequest,
  type requestNewPermissionResponse,
  type sessionKeyResponse,
  type verifyAccessKeyResponseSchema,
} from './schemas';

export const AccessPermission = {
  ImportAndEditURLs: 0,
  ImportAndDeleteFiles: 1,
  EditFileTags: 2,
  SearchAndFetchFiles: 3,
  ManagePages: 4,
  ManageCookiesAndHeaders: 5,
  ManageDatabase: 6,
  EditFileNotes: 7,
  ManageFileRelationships: 8,
  EditFileRatings: 9,
  EditPopups: 10,
  EditFileTimes: 11,
} as const;

export type ApiVersionResponse = z.infer<typeof apiVersionResponse>;
export type RequestNewPermissionRequest = z.infer<typeof requestNewPermissionRequest>;
export type RequestNewPermissionResponse = z.infer<typeof requestNewPermissionResponse>;
export type SessionKeyResponse = z.infer<typeof sessionKeyResponse>;
export type VerifyAccessKeyResponse = z.infer<typeof verifyAccessKeyResponseSchema>;
export type GetServiceRequest = z.infer<typeof getServiceRequest>;
export type GetServiceResponse = z.infer<typeof getServiceResponse>;
export type GetServicesResponse = z.infer<typeof getServicesResponse>;
