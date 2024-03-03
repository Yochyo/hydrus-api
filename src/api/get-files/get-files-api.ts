import { BaseApi } from './base-api';
import { type File, type FileDomain } from '../common/common-hydrus-types';

export class GetFilesApi extends BaseApi {
  // todo File searches occur in the display tag_display_type. If you want to pair autocomplete tag lookup from /search_tags to this file search (e.g. for making a standard booru search interface), then make sure you are searching display tags there.
  async searchFiles(
    args: {
      tags: Array<string | string[]>;
      tagServiceKey?: string;
      fileSortType?: FileSortType;
      fileSortAsc?: boolean;
      returnFileIds?: boolean;
      returnHashes?: boolean;
    } & Partial<FileDomain>
  ): Promise<{
    fileIds: number[];
    hashes: string[];
  }> {
    return await this.request({ method: 'GET', endpoint: 'get_files/search_files', args: { ...args, tags: args.tags } });
  }

  async getFileHashes(args: { hash: string; hashes: string[]; sourceHashType: HashType; desiredHashType: HashType }): Promise<{
    hashes: Record<string, string>;
  }> {
    return await this.request({ method: 'GET', endpoint: 'get_files/file_hashes', args });
  }

  async getFileMetadata<DETAILED extends boolean>(
    args: {
      createNewFileIds?: boolean;
      onlyReturnIdentifiers?: boolean;
      onlyReturnBasicInformation?: boolean;
      detailedUrlInformation?: DETAILED;
      includeNotes?: boolean;
      includeServiceObject?: boolean;
      hideServiceKeysTags?: boolean;
    } & File
  ): Promise<DETAILED extends false ? MetaDataResult : MetaDataResult & { metadata: DetailedKnownUrls[] }> {
    return await this.request({ method: 'GET', endpoint: 'get_files/file_metadata', args });
  }

  async getFile(args: { fileId?: number; hash?: string; download?: boolean }): Promise<any> {
    return await this.request({ method: 'GET', endpoint: 'get_files/file', args, axiosArgs: { responseType: 'arraybuffer' } });
  }

  async getThumbnail(args: { fileId?: number; hash?: string }): Promise<any> {
    return await this.request({ method: 'GET', endpoint: 'get_files/file', args, axiosArgs: { responseType: 'arraybuffer' } });
  }
}

export enum FileSortType {
  FILE_SIZE = 0,
  DURATION = 1,
  IMPORT_TIME = 2,
  FILETYPE = 3,
  RANDOM = 4,
  WIDTH = 5,
  HEIGHT = 6,
  RATIO = 7,
  NUMER_OF_PIXELS = 8,
  NUMBER_OF_TAGS = 9,
  NUMBER_OF_MEDIA_VIEWS = 10,
  TOTAL_MEDIA_VIEWTIME = 11,
  APPROXIMATE_BITRATE = 12,
  HAS_AUDIO = 13,
  MODIFIED_TIME = 14,
  FRAMERATE = 15,
  NUMBER_OF_FRAMES = 16,
  LAST_VIEWED_TIME = 18,
  ARCHIVE_TIMESTAMP = 19,
  HASH = 20,
}

export type HashType = 'sha256' | 'md5' | 'sha1' | 'sha512';

export interface MetaDataResult {
  // todo service object https://hydrusnetwork.github.io/hydrus/developer_api.html#services_object
  services: string;
  metadata: Array<Metadatum | MissingFileId>;
}

export interface Metadatum {
  fileId: number;
  hash: string;
  size: number;
  mime: string;
  ext: string;
  width: number;
  height: number;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  duration?: number;
  timeModified?: number;
  timeModifiedDetails: Record<string, number>;
  fileServices: {
    current: Record<string, { timeImported?: number; timeModified?: number }>;
    deleted: Record<string, { timeImported?: number; timeDeleted?: number; timeModified?: number }>;
  };
  ipfsMultihashes: Record<string, string>;
  hasAudio: boolean;
  numFrames?: number;
  numWords: null;
  isInbox: boolean;
  isLocal: boolean;
  isTrashed: boolean;
  isDeleted: boolean;
  hasExif: boolean;
  hasHumanReadableEmbeddedMetadata: boolean;
  hasIccProfile: boolean;
  knownUrls: string[];
  ratings: Record<string, number | string | null>;
  tags: {
    storageTags: {
      '0'?: string[];
      '1'?: string[];
      '2'?: string[];
      '3'?: string[];
    };
    displayTags: {
      '0'?: string[];
      '1'?: string[];
      '2'?: string[];
      '3'?: string[];
    };
  };
}

interface MissingFileId {
  fileId: null;
  hash: string;
}

interface DetailedKnownUrls {
  normalizedUrl: string;
  urlType: number;
  urlTypeString: string;
  matchName: string;
  canParse: boolean;
}
