import { BaseApi } from './base-api';
import { type Either } from '../common/util-types';

export class AddNotesApi extends BaseApi {
  //  todo
  async setNotes(
    args: { notes: Record<string, string>; mergeCleverly?: boolean; extendExistingNoteIfPossible?: boolean; conflictResolution?: ConflictResolution } & Either<
      { hash: string },
      { fileId: string }
    >
  ): Promise<any> {
    return await this.request({ method: 'POST', endpoint: 'add_notes/set_notes', args });
  }

  async deleteNotes(args: { noteNames: string[] } & Either<{ hash: string }, { fileId: string }>): Promise<object> {
    return await this.request({ method: 'POST', endpoint: 'add_notes/delete_notes', args });
  }
}

export enum ConflictResolution {
  REPLACE = 0,
  IGNORE = 1,
  APPEND = 2,
  RENAME = 3,
}
