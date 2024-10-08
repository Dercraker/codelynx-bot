import { z } from "zod";

export const envSchema = z.object({
  TOKEN: z.string(),

  SERVER_ID: z.string(),

  DATABASE_URL: z.string(),
  OPENAI_API_KEY: z.string(),
  GOOGLE_API_KEY: z.string(),
  CODELINE_TOKEN: z.string(),
  CODELINE_ENDPOINT: z.string(),

  LINKS_CHANNEL_ID: z.string(),
  HELP_CHANNEL_ID: z.string(),
  PRESENTATION_CHANNEL_ID: z.string(),
  WELCOME_CHANNEL_ID: z.string(),
  VERIFY_ROLE_ID: z.string(),
  LYNX_ROLE_ID: z.string(),

  RESOLVED_THREAD_TAG_ID: z.string(),

  WELCOME_MESSAGE: z.string(),

  MIN_USERNAME_LEN: z.string(),
  MAX_USERNAME_LEN: z.string(),
});