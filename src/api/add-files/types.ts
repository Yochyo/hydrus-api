import { type z } from 'zod';
import {
  type addFileRequest,
  type addFileResponse,
  type archiveFilesRequest,
  type deleteFilesRequest,
  type generateHashesRequest,
  type generateHashesResponse,
  type unarchiveFilesRequest,
  type undeleteFilesRequest,
} from './schemas';

export const AddFileStatus = {
  SuccessfullyImported: 1,
  AlreadyInDB: 2,
  PreviouslyDeleted: 3,
  Failed: 4,
  Vetoed: 7,
} as const;

export type AddFileRequest = z.infer<typeof addFileRequest>;
export type AddFileResponse = z.infer<typeof addFileResponse>;
export type DeleteFilesRequest = z.infer<typeof deleteFilesRequest>;
export type UndeleteFilesRequest = z.infer<typeof undeleteFilesRequest>;
export type ArchiveFilesRequest = z.infer<typeof archiveFilesRequest>;
export type UnarchiveFilesRequest = z.infer<typeof unarchiveFilesRequest>;
export type GenerateHashesRequest = z.infer<typeof generateHashesRequest>;
export type GenerateHashesResponse = z.infer<typeof generateHashesResponse>;
