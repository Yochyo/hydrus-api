export const HydrusServiceType = {
  TAG_REPOSITORY: 0,
  FILE_REPOSITORY: 1,
  LOCAL_FILE_DOMAIN: 2,
  MESSAGE_DEPOT: 3,
  LOCAL_TAG: 5,
  LOCAL_RATING_NUMERICAL: 6,
  LOCAL_RATING_LIKE: 7,
  RATING_NUMERICAL_REPOSITORY: 8,
  RATING_LIKE_REPOSITORY: 9,
  COMBINED_TAG: 10,
  COMBINED_FILE: 11,
  LOCAL_BOORU: 12,
  IPFS: 13,
  LOCAL_FILE_TRASH_DOMAIN: 14,
  COMBINED_LOCAL_FILE: 15,
  TEST_SERVICE: 16,
  LOCAL_NOTES: 17,
  CLIENT_API_SERVICE: 18,
  COMBINED_DELETED_FILE: 19,
  LOCAL_FILE_UPDATE_DOMAIN: 20,
  COMBINED_LOCAL_MEDIA: 21,
  LOCAL_RATING_INCDEC: 22,
  SERVER_ADMIN: 99,
} as const;