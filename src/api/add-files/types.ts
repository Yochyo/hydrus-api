import { HydrusFileDomain, HydrusFiles } from '../../common/types';

export enum AddFileStatus {
  SuccessfullyImported = 1,
  AlreadyInDB = 2,
  PreviouslyDeleted = 3,
  Failed = 4,
  Vetoed = 7,
}

export type AddFileRequest = { path: string } | any;
export type AddFileResponse = {
  status: AddFileStatus;
  hash: string;
  note: string;
};
export type DeleteFilesRequest = HydrusFiles & Partial<HydrusFileDomain> & { reason: string };
export type UndeleteFilesRequest = HydrusFiles & Partial<HydrusFileDomain>;
export type ClearFileDeletionRecordRequest = HydrusFiles;
export type ArchiveFilesRequest = HydrusFiles;
export type UnarchiveFilesRequest = HydrusFiles;
export type GenerateHashesRequest = { path: string } | any;
export type GenerateHashesResponse = {
  hash: string;
  perceptual_hashes: string[] | undefined;
  pixel_hash: string | undefined;
};
