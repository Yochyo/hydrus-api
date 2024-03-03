import { type File } from '../common/common-hydrus-types';
import { BaseApi } from './base-api';

export class AddUrlApi extends BaseApi {
  async getUrlFiles(args: { url: string; doublecheckFileSystem?: boolean }): Promise<{
    normalizedUrl: string;
    urlFileStatuses: Array<{
      status: AddFileStatus;
      hash: string;
      note: string;
    }>;
  }> {
    return await this.request({ method: 'GET', endpoint: 'add_urls/get_url_files', args });
  }

  async getUrlInfo(args: { url: string }): Promise<{
    normalizedUrl: string;
    urlType: UrlType;
    urlTypeString: string;
    matchName: string;
    canParse: string;
  }> {
    return await this.request({ method: 'GET', endpoint: 'add_urls/get_url_info', args });
  }

  async addUrl(args: {
    url: string;
    destinationPageKey?: string;
    destinationPageName?: string;
    showDestinationPage?: boolean;
    serviceKeysToAdditionalTags?: Record<string, string[]>;
    filterableTags?: string[];
  }): Promise<{
    humanResultText: string;
    normalisedUrl: string;
  }> {
    return await this.request({ method: 'POST', endpoint: 'add_urls/add_url', args });
  }

  async associateUrl(
    args: {
      urlToAdd?: string;
      urlsToAdd?: string[];
      urlToDelete?: string;
      urlsToDelete?: string[];
    } & File
  ): Promise<object> {
    return await this.request({ method: 'POST', endpoint: 'add_urls/associate_url', args });
  }
}

export enum AddFileStatus {
  NOT_IN_DB = 0,
  ALREADY_IN_DB = 2,
  PREVIOUSLY_DELETED = 3,
}

export enum UrlType {
  POST_URL = 0,
  FILE_URL = 2,
  GALLERY_URL = 3,
  WATCHABLE_URL = 4,
  UNKNOWN_URL = 5,
}
