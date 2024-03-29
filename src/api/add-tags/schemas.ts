import { z } from 'zod';
import { fileDomainSchema, fileSchema, serviceObjectSchema } from '../../common/schemas';
import { AddTagAction } from './types';

export const addTagAction = z.nativeEnum(AddTagAction);

export const cleanTagsRequest = z.object({
  tags: z.array(z.string()),
});
export const cleanTagsResponse = z.object({
  tags: z.array(z.string()),
});

export const getSiblingsAndParentsRequest = z.object({
  tags: z.array(z.string()),
});

export const getSiblingsAndParentsResponse = z.object({
  services: serviceObjectSchema,
  tags: z.record(
    z.string(),
    z.record(
      z.string(),
      z.object({
        ideal_tag: z.string(),
        siblings: z.array(z.string()),
        descendants: z.array(z.string()),
        ancestors: z.array(z.string()),
      })
    )
  ),
});

export const searchTagsRequest = z.intersection(
  fileDomainSchema,
  z.object({
    search: z.string(),
    tag_service_key: z.string().optional(),
    tag_display_type: z.union([z.literal('storage'), z.literal('display')]),
  })
);

export const searchTagsResponse = z.object({
  tags: z.array(
    z.object({
      value: z.string(),
      count: z.number(),
    })
  ),
});

export const addTagsRequest = fileSchema.and(
  z.object({
    service_keys_to_tags: z.array(z.string()).optional(),
    service_keys_to_actions_to_tags: z.record(
      z.string(),
      z.union([
        z.object({
          [AddTagAction.PetitionFromTagRepo]: z.array(z.array(z.string()).max(2)),
        }),
        z.record(addTagAction, z.array(z.string())),
      ])
    ),
  })
);
