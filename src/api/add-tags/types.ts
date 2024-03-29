import { type z } from 'zod';
import {
  type addTagsRequest,
  type cleanTagsRequest,
  type cleanTagsResponse,
  type getSiblingsAndParentsRequest,
  type getSiblingsAndParentsResponse,
  type searchTagsRequest,
  type searchTagsResponse,
} from './schemas';

export const AddTagAction = {
  AddTag: 0,
  DeleteFromService: 1,
  PendToTagRepo: 2,
  RescindPendFromTagRepo: 3,
  PetitionFromTagRepo: 4,
  RescindPetitionFromTagRepo: 5,
} as const;

export type CleanTagsRequest = z.infer<typeof cleanTagsRequest>;
export type CleanTagsResponse = z.infer<typeof cleanTagsResponse>;
export type GetSiblingsAndParentsRequest = z.infer<typeof getSiblingsAndParentsRequest>;
export type GetSiblingsAndParentsResponse = z.infer<typeof getSiblingsAndParentsResponse>;
export type SearchTagsRequest = z.infer<typeof searchTagsRequest>;
export type SearchTagsResponse = z.infer<typeof searchTagsResponse>;
export type AddTagsRequest = z.infer<typeof addTagsRequest>;
