import { z } from 'zod';
import { AddFileStatus } from './types';
import { fileDomainSchema, fileSchema } from '../../common/schemas';

// todo add file as bytes https://hydrusnetwork.github.io/hydrus/developer_api.html#add_files_add_file

export const addFileRequest = z.union([z.object({ path: z.string(), bytes: z.undefined() }), z.object({ path: z.undefined(), bytes: z.any() })]);
export const addFileResponse = z.object({
  status: z.nativeEnum(AddFileStatus),
  hash: z.string(),
  note: z.string(),
});

export const deleteFilesRequest = fileSchema.and(fileDomainSchema.optional()).and(z.object({ reason: z.string().optional() }));
// todo should fileSchema and and fileDomainSchema me either to make this type less ugly? type Test = z.infer<typeof deleteFilesRequest>;
// const a: Test = {};
// console.log(a);

export const undeleteFilesRequest = fileSchema.and(fileDomainSchema.optional());

export const archiveFilesRequest = fileSchema;

export const unarchiveFilesRequest = fileSchema;

export const generateHashesRequest = z.union([z.object({ path: z.string(), bytes: z.undefined() }), z.object({ path: z.undefined(), bytes: z.any() })]);
export const generateHashesResponse = z.object({ hash: z.string(), perceptual_hashes: z.string().optional(), pixel_hash: z.string().optional() });
