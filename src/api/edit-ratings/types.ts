import { HydrusFiles } from '../../common/types';

export type SetRatingRequest = HydrusFiles & {
  rating_service_key: string;
  rating: boolean | number | null;
};
