import { z } from 'zod';
import {
  fileHashesRequest,
  fileHashesResponse,
  fileMetadataRequest, fileMetadataResponse,
  getFileRequest,
  getFileResponse,
  getThumbnailRequest,
  getThumbnailResponse,
  renderRequest,
  renderResponse,
  searchFilesRequest,
  searchFilesResponse,
} from './schemas';

export const fileSortType = {
  FileSize: 0,
  Duration: 1,
  ImportTime: 2,
  FileType: 3,
  Random: 4,
  Width: 5,
  Height: 6,
  Ratio: 7,
  NumberOfPixels: 8,
  NumberOfTags: 9,
  NumberOfMediaViews: 10,
  TotalMediaViewtime: 11,
  ApproximateBitrate: 12,
  HasAudio: 13,
  ModifiedTime: 14,
  Framerate: 15,
  NumberOfFrames: 16,
  LastViewedTime: 18,
  ArchiveTimestamp: 19,
  HashHex: 20,
} as const;

export type SearchFileRequest = z.infer<typeof searchFilesRequest>
export type SearchFilesResponse = z.infer<typeof searchFilesResponse>
export type FileHashesRequest = z.infer<typeof fileHashesRequest>
export type FileHashesResponse = z.infer<typeof fileHashesResponse>
export type FileMetadataRequest = z.infer<typeof fileMetadataRequest>
export type FileMetadataResponse = z.infer<typeof fileMetadataResponse>
export type GetFileRequest = z.infer<typeof getFileRequest>
export type GetFileResponse = z.infer<typeof getFileResponse>
export type GetThumbnailRequest = z.infer<typeof getThumbnailRequest>
export type GetThumbnailResponse = z.infer<typeof getThumbnailResponse>
export type RenderRequest = z.infer<typeof renderRequest>
export type RenderResponse = z.infer<typeof renderResponse>