import { HydrusFiles } from '../../common/types';
import { RequireAtLeastOne } from 'type-fest';

export enum NoteConflictResolution {
  Replace = 0,
  Ignore = 1,
  Append = 2,
  Rename = 3,
}

export type SetNotesRequest = RequireAtLeastOne<Pick<HydrusFiles, 'hash' | 'file_id'>> & {
  notes: {
    [name: string]: string;
  };
  merge_cleverly?: boolean;
  extend_existing_note_if_possible?: boolean;
  conflict_resolution?: NoteConflictResolution;
};

export type SetNotesResponse = {
  notes: {
    [name: string]: string;
  };
};

export type DeleteNotes = RequireAtLeastOne<Pick<HydrusFiles, 'hash' | 'file_id'>> & {
  note_names: string[];
};
