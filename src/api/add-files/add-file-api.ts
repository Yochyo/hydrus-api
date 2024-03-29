import { BaseApi } from '../base-api';
import {
  type AddFileRequest,
  type AddFileResponse,
  type ArchiveFilesRequest,
  type DeleteFilesRequest,
  type UnarchiveFilesRequest,
  type UndeleteFilesRequest,
} from './types';
import HydrusApi from '../../hydrus-api';

export class AddFileApi extends BaseApi {
  // todo bytes
  async addFile(args: AddFileRequest): Promise<AddFileResponse> {
    return await this.request({
      method: 'POST',
      endpoint: 'add_files/add_file',
      args: args.path ? args : args.bytes,
      headers: args.path ? HydrusApi.CONTENT_TYPE_JSON : HydrusApi.CONTENT_TYPE_STREAM,
    });
  }

  async deleteFiles(args: DeleteFilesRequest): Promise<unknown> {
    return await this.request({ method: 'POST', endpoint: 'add_files/delete_files', args });
  }

  async undeleteFiles(args: UndeleteFilesRequest): Promise<unknown> {
    return await this.request({ method: 'POST', endpoint: 'add_files/undelete_files', args });
  }

  async archiveFiles(args: ArchiveFilesRequest): Promise<unknown> {
    return await this.request({ method: 'POST', endpoint: 'add_files/archive_files', args });
  }

  async unarchiveFiles(args: UnarchiveFilesRequest): Promise<unknown> {
    return await this.request({ method: 'POST', endpoint: 'add_files/unarchive_files', args });
  }
}
