import { HydrusFiles } from '../../common/types';
import { Integer, RequireAtLeastOne } from 'type-fest';

export enum TimestampType {
  ModifiedTimeWebDomain = 0,
  ModifiedTimeHardDrive = 1,
  ImportTime = 3,
  DeleteTime = 4,
  ArchivedTime = 5,
  LastViewed = 6,
  OriginallyImported = 7,
}

export enum CanvasType {
  MediaViewer = 0,
  PreviewViewer = 1,
}

export type SetTimeRequest = HydrusFiles &
  RequireAtLeastOne<{ timestamp: number | null; timestamp_ms: number | null }> & {
    timestamp_type: TimestampType;
    file_service_key?: string; //todo conditional
    canvas_type?: CanvasType; //todo conditional
    domain?: string; //todo conditional
  };
