import { z } from "zod";

export const challengeDefaultFlag = z
  .object({
    value: z.string().meta({
      description: "The default flag for the challenge",
      examples: ["flag{this_is_a_flag}"],
    }),
    regex: z
      .string()
      .optional()
      .meta({
        description: "the regex value for finding the flag",
        examples: ["/(flag)?{?this_is_a_flag}?/i"],
      }),
  })
  .optional()
  .meta({
    description:
      "The default flag for this challenge. Default: The challenge has no default flag.",
  });
