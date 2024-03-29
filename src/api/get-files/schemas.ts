import { z } from 'zod';
import { fileDomainSchema, serviceSchema } from '../../common/schemas';

export const hashTypeSchema = z.union([z.literal('sha256'), z.literal('md5'), z.literal('sha1'), z.literal('sha512')]);

export const searchFilesRequest = fileDomainSchema.and(
  z.object({
    tags: z.array(z.string().or(z.array(z.string()))),
    tag_service_key: z.string().optional(),
    file_sort_type: z.undefined(),
    file_sort_asc: z.boolean().optional(),
    return_file_ids: z.boolean().optional(),
    return_hashes: z.boolean().optional(),
  })
);

export const searchFilesResponse = z.object({
  hashes: z.array(z.string()),
  file_ids: z.array(z.number()),
});
// todo omit

// todo selective
export const fileHashesRequest = z.object({
  hash: z.string().optional(),
  hashes: z.array(z.string()).optional(),
  source_hash_type: hashTypeSchema.optional(),
  desired_hash_type: hashTypeSchema,
});

export const fileHashesResponse = z.object({
  hashes: z.record(z.string(), z.string()),
});

// todo
export const fileMetadata = z.object({
  services: serviceSchema,
  metadata: z.array(
    z.object({
      file_id: z.number(),
      hash: z.string(),
      size: z.number(),
      mime: z.string(),
      filetype_forced: z.boolean(), // todo
      filetype_human: z.string(), // todo
      ext: z.string(),
      width: z.number(),
      height: z.number(),
      thumbnail_width: z.number().optional(),
      thumbnail_height: z.number().optional(),
      duration: z.number().optional(),
      time_modified: z.number().optional(),
      time_modified_details: z.record(z.number()),
      file_services: z.object({
        current: z.record(
          z.object({
            time_imported: z.number().optional(),
            time_modified: z.number().optional(),
          })
        ),
        deleted: z.record(
          z.object({
            time_imported: z.number().optional(),
            time_deleted: z.number().optional(),
            time_modified: z.number().optional(),
          })
        ),
      }),
      ipfs_multihashes: z.record(z.string()),
      has_audio: z.boolean(),
      blurhash: z.string(),
      pixel_hash: z.string(),
      num_frames: z.number().optional(),
      num_words: z.null(),
      is_inbox: z.boolean(),
      is_local: z.boolean(),
      is_trashed: z.boolean(),
      is_deleted: z.boolean(),
      has_exif: z.boolean(),
      has_human_readable_embedded_metadata: z.boolean(),
      has_icc_profile: z.boolean(),
      has_transparency: z.boolean(),
      known_urls: z.array(z.string()),
      ratings: z.record(z.string(), z.union([z.string(), z.number()]).optional()),
      tags: z.object({
        // todo
        storage_tags: z.object({
          '0': z.array(z.string()).optional(),
          '1': z.array(z.string()).optional(),
          '2': z.array(z.string()).optional(),
          '3': z.array(z.string()).optional(),
        }),
        display_tags: z.object({
          '0': z.array(z.string()).optional(),
          '1': z.array(z.string()).optional(),
          '2': z.array(z.string()).optional(),
          '3': z.array(z.string()).optional(),
        }),
      }),
    })
  ),
});

export const getFileRequest = z.object({
  file_id: z.string().optional(),
  hash: z.string().optional(),
  download: z.boolean().optional(),
});

// todo
export const getFileResponse = z.any();

export const getThumbnailRequest = z.object({
  file_id: z.string().optional(),
  hash: z.string().optional(),
});

// todo
export const getThumbnailResponse = z.any();

export const renderRequest = z.object({
  file_id: z.string().optional(),
  hash: z.string().optional(),
  download: z.boolean().optional(),
});

// todo
export const renderResponse = z.any();
