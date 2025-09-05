import { z } from 'zod';

const EnvSchema = z.object({
  PORT: z.string().default('3000'),
  ENABLE_HTTP_LOG: z.string().default('false'),
});

export const env = EnvSchema.parse(process.env);
