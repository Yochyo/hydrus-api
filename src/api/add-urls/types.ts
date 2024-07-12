import { RequireAtLeastOne, ValueOf } from 'type-fest';
import { HydrusFiles } from '../../common/types';

export enum UrlType {
  PostUrl = 0,
  FileUrl = 2,
  GalleryUrl = 3,
  WatchableUrl = 4,
  UnknownUrl = 5,
}

export type GetUrlFilesRequest = {
  url: string;
  doublecheck_file_system?: boolean;
};

export type GetUrlFilesResponse = {
  normalised_url: string;
  url_file_statuses: {
    status: number; // todo unclear, might have to change status in /add_files/add_file too
    hash: string;
    note: string;
  }[];
};

export type GetUrlInfoRequest = {
  url: string;
};

export type GetUrlInfoResponse = {
  request_url: string;
  normalised_url: string;
  url_type: UrlType;
  url_type_string: string;
  match_name: string;
  can_parse: boolean;
};

export type AddUrlRequest = {
  url: string;
  destination_page_key?: string; //todo is it really a string?
  destination_page_name?: string;
  show_destination_page?: boolean;
  service_keys_to_additional_tags: Record<string, string[]>; //todo what kind of data structures are fine, add that to the docs
  filterable_tags: string[];
};

export type AddUrlResponse = {
  human_result_text: string;
  normalised_url: string;
};

export type AssociateUrlRequest = HydrusFiles &
  RequireAtLeastOne<{ url_to_add: string; urls_to_add: string[] }> &
  RequireAtLeastOne<{ url_to_delete: string; urls_to_delete: string[] }> & { normalise_urls?: boolean };

export type AssociateUrlResponse = {
  url_to_add: string;
  hash: string;
};
