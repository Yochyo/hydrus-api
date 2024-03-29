import { z } from 'zod';
import { AddFileStatus } from '../add-files/types';
import { UrlType } from './types';
import { fileSchema } from '../../common/schemas';

export const urlType = z.nativeEnum(UrlType);

export const getUrlFiles = z.object({
  url: z.string(),
  doublecheck_file_system: z.boolean().optional(),
});

export const getUrlFilesResponse = z.object({
  normalised_url: z.string(),
  url_file_statuses: z.array(
    z.object({
      status: z.nativeEnum(AddFileStatus),
      hash: z.string(),
      note: z.string(),
    })
  ),
});

export const getUrlInfoRequest = z.object({
  url: z.string(),
});

export const getUrlInfoResponse = z.object({
  normalised_url: z.string(),
  url_type: urlType,
  url_type_string: z.string(),
  match_name: z.string(),
  can_parse: z.boolean(),
});

export const addUrlRequest = z.object({
  url: z.string(),
  destination_page_key: z.string().optional(),
  destination_page_name: z.string().optional(),
  show_destination_page: z.boolean().optional(),
  service_keys_to_additional_tags: z.record(z.string(), z.array(z.string())),
  filterable_tags: z.array(z.string()),
});

export const addUrlInfoResponse = z.object({
  human_result_text: z.string(),
  normalised_url: urlType,
});

export const associateUrl = z.intersection(
  z.object({
    url_to_add: z.string().optional(),
    urls_to_add: z.array(z.string()).optional(),
    url_to_delete: z.string().optional(),
    urls_to_delete: z.array(z.string()).optional(),
  }),
  fileSchema
);
