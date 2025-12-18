import {z} from "zod";

export const movieValidator = z.object({
  title: z.string().min(1).optional(),
  overview: z.string().min(10).optional(),
  releaseYear: z.number().int().optional(),
  genres: z.array(z.string()).optional(),
  runtime: z.number().int().optional(),
  posterUrl: z.string().url().optional(),
})

