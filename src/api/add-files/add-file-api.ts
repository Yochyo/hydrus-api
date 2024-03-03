import { type Either } from '../common/util-types';
import { type File, type FileDomain } from '../common/common-hydrus-types';
import { BaseApi } from './base-api';
import HydrusApi from '../hydrus-api';

export class AddFileApi extends BaseApi {
  // todo bytes
  async addFile(args: Either<{ path: string }, { bytes: any }>): Promise<{ status: AddFileStatus; hash: string; note: string }> {
    return await this.request({
      method: 'POST',
      endpoint: 'add_files/add_file',
      args: args.path ?? args.bytes,
      headers: args.path != null ? HydrusApi.CONTENT_TYPE_JSON : HydrusApi.CONTENT_TYPE_STREAM,
    });
  }

  async deleteFiles(args: File & FileDomain & { reason?: string }): Promise<unknown> {
    return await this.request({ method: 'POST', endpoint: 'add_files/delete_files', args });
  }

  async undeleteFiles(args: File & FileDomain): Promise<unknown> {
    return await this.request({ method: 'POST', endpoint: 'add_files/undelete_files', args });
  }

  async archiveFiles(args: File): Promise<unknown> {
    return await this.request({ method: 'POST', endpoint: 'add_files/archive_files', args });
  }

  async unarchiveFiles(args: File): Promise<unknown> {
    return await this.request({ method: 'POST', endpoint: 'add_files/unarchive_files', args });
  }
}
