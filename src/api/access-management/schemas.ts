import { z } from 'zod';
import { AccessPermission } from './types';
import { serviceSchema } from '../../common/schemas';

// region common
export const accessPermission = z.nativeEnum(AccessPermission);
// endregion

// region apiVersion
export const apiVersionResponse = z.object({
  version: z.number(),
  hydrus_version: z.number(),
});
// endregion

// region requestNewPermissions
export const requestNewPermissionRequest = z.object({
  name: z.string(),
  basic_permissions: accessPermission,
});
export const requestNewPermissionResponse = z.object({
  access_key: z.string(),
});
// endregion

// region sessionKey
export const sessionKeyResponse = z.object({
  session_key: z.string(),
});
// endregion

// region verifyAccessKey
export const VerifyAccessKeyResponseSchema = z.object({
  basic_permissions: z.array(accessPermission),
  human_description: z.string(),
});
// endregion

// region getService
export const getServiceRequest = z.object({
  service_name: z.string().optional(),
  service_key: z.string().optional(),
});

export const getServiceResponse = z.object({
  service: serviceSchema,
});
// endregion

// region getServices
export const getServicesResponse = z.object({
  services: z.record(z.string(), serviceSchema),
});
// endregion
