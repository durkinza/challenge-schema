import { z } from "zod";

export const challengeAuthor = z
  .object({
    name: z.string().meta({ description: "The author's name" }),
    email: z.string().optional().meta({ description: "The author's email" }),
    website: z
      .string()
      .optional()
      .meta({ description: "The author's website" }),
  })
  .meta({
    description:
      "The author of the challenge, which may be different than the user who published the challenge",
  });
