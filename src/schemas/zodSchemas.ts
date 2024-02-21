import { z } from 'zod';

export const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
});

export const loginSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(8)
});