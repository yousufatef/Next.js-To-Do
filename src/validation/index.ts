import { z } from "zod";

export const todoFormSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    body: z.string().max(80, {
        message: "Body must be at maximum 80 characters.",
    }).optional(),
})