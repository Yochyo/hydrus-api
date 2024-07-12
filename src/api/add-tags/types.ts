import { HydrusFileDomain, HydrusFiles, HydrusServiceObject } from '../../common/types';
import { RequireAtLeastOne, ValueOf } from 'type-fest';

export enum AddTagAction {
  AddTag = 0,
  DeleteFromService = 1,
  PendToTagRepo = 2,
  RescindPendFromTagRepo = 3,
  PetitionFromTagRepo = 4,
  RescindPetitionFromTagRepo = 5,
}
export type CleanTagsRequest = {
  tags: string[];
};
export type CleanTagsResponse = {
  tags: string[];
};
export type GetSiblingsAndParentsRequest = {
  tags: string[];
};
export type GetSiblingsAndParentsResponse = {
  services: HydrusServiceObject;
  tags: Record<
    string,
    Record<
      string,
      {
        ideal_tag: string;
        siblings: string[];
        descendants: string[];
        ancestors: string[];
      }
    >
  >;
};

export type SearchTagsRequest = Partial<HydrusFileDomain> & {
  search: string;
  tag_service_key?: string;
  tag_display_type?: 'storage' | 'display';
};
export type SearchTagsResponse = {
  tags: { value: string; count: number }[];
};

export type AddTagsRequest = HydrusFiles &
  RequireAtLeastOne<{
    service_keys_to_tags: {
      [serviceKey: string]: string[];
    };
    service_keys_to_actions_to_tags: {
      [serviceKey: string]: Partial<
        | {
            [action in AddTagAction]: string[];
          }
        | {
            [AddTagAction.PetitionFromTagRepo]: (string | [string, string])[];
          }
      >;
    };
  }> & {
    override_previously_deleted_mappings?: boolean;
    create_new_deleted_mappings?: boolean;
  };
