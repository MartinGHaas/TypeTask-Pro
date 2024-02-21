// Libs
import { z } from 'zod';

// Zod Schemas
import { signUpSchema, loginSchema } from '@/schemas/zodSchemas';

export type SignUpFields = z.infer<typeof signUpSchema>;

export type LoginFields = z.infer<typeof loginSchema>;
