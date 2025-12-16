import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string().trim().min(2, "Name is required"),
    email: z.string().trim().min(1,"Email is required").email("please provide a vaild email").toLowerCase(),
    password: z.string().trim().min(1,"Password is required").min(6, "Password must be at least 6 characters long"),
})

export const loginSchema = z.object({
    email: z.string().trim().min(1, "Email is required").email("Please Provide a vaild email").toLowerCase(),
    password: z.string().trim().min(1, "Password is required")
})