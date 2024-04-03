import { z } from 'zod';

export const fileSchema = z.object({
  file_id: z.number().optional(),
  file_ids: z.array(z.number()).optional(),
  hash: z.string().optional(),
  hashes: z.array(z.string()).optional(),
});

export const fileDomainSchema = z.object({
  file_service_key: z.string().optional(),
  file_service_keys: z.array(z.string()).optional(),
  deleted_file_service_key: z.string().optional(),
  deleted_file_service_keys: z.array(z.string()).optional(),
});

export const serviceSchema = z.object({});
export const serviceObjectSchema = z.object({});
