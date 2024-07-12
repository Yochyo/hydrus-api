import type { RequireAtLeastOne, ValueOf } from 'type-fest';
import { HydrusServiceType } from './utils';
import { boolean } from 'zod';

export type HydrusFiles = RequireAtLeastOne<{ file_id: number; file_ids: number[]; hash: string; hashes: string[] }>;
export type HydrusFileDomain = RequireAtLeastOne<{
  file_service_key: string;
  file_service_keys: string[];
  deleted_file_service_key: string;
  deleted_file_service_keys: string[];
}>;

export type HydrusService = {
  name: string;
  type: ValueOf<typeof HydrusServiceType>;
  type_pretty: string;
};

export type HydrusServiceObject = Record<string, HydrusService>;

//todo Rating services now have some extra data:
//
//     like/dislike and numerical services have star_shape, which is one of circle | square | fat star | pentagram star
//     numerical services have min_stars (0 or 1) and max_stars (1 to 20)
