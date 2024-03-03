import { type z } from 'zod';
import { type fileSchema } from '../common/schemas';

export type File = z.infer<typeof fileSchema>;
