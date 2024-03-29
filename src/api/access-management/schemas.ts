import { z } from 'zod';
import { AccessPermission } from './types';
import { serviceSchema } from '../../common/schemas';

export const accessPermission = z.nativeEnum(AccessPermission);

export const apiVersionResponse = z.object({
  version: z.number(),
  hydrus_version: z.number(),
});

export const requestNewPermissionRequest = z.object({
  name: z.string(),
  basic_permissions: accessPermission,
});
export const requestNewPermissionResponse = z.object({
  access_key: z.string(),
});

export const sessionKeyResponse = z.object({
  session_key: z.string(),
});

export const verifyAccessKeyResponseSchema = z.object({
  basic_permissions: z.array(accessPermission),
  human_description: z.string(),
});

export const getServiceRequest = z.object({
  service_name: z.string().optional(),
  service_key: z.string().optional(),
});

export const getServiceResponse = z.object({
  service: serviceSchema,
});

export const getServicesResponse = z.object({
  services: z.record(z.string(), serviceSchema),
});
