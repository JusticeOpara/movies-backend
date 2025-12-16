import {z} from 'zod';

export const addToWatchlistSchema = zod.object({
    movieId: z.string().uuid(),
    status: z.enum(["PLANNED", "WATCHING", "COMPLETED", "DROPPED"], {
        error: () =>({
            message: "Status must be one of PLANNED, WATCHED, COMPLETED, DROPPED"
        })
    }).optional(),
    rating: z.coerce.number().int("Rating must be an interger").min(1, "Rating must not be less than 1").max(10,"rating").optional(),
    notes: z.string().optional()
    
})