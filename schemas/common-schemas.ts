import {z} from "zod";

export const idSchema = z.string().uuid();

export const paginationSchema = z.object({
  page: z.coerce.number().min(1).max(100).default(10),
  limit: z.coerce.number().min(1).max(100).default(10),
})