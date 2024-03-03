export const AddFileStatus = {
  SuccessfullyImported: 1,
  AlreadyInDB: 2,
  PreviouslyDeleted: 3,
  Failed: 4,
  Vetoed: 7,
} as const;
