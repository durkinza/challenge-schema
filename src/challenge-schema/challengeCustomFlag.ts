import { z } from "zod";

export const challengeCustomFlag = z
  .object({
    allowedCharacters: z
      .object({
        lowercase: z.boolean().meta({
          description: "If lowercase characters are allowed in the flag.",
        }),
        uppercase: z.boolean().meta({
          description: "If uppercase characters are allowed in the flag.",
        }),
        numbers: z.boolean().meta({
          description: "If numbers characters are allowed in the flag.",
        }),
        specialCharacters: z.boolean().meta({
          description: "If special characters are allowed in the flag.",
        }),
        length: z
          .number()
          .or(
            z.object({
              min: z
                .number()
                .meta({ description: "The minimum length of the flag" }),
              max: z
                .number()
                .meta({ description: "The maximum length of the flag" }),
            }),
          )
          .optional()
          .meta({
            description: "The length of the flag. Default: infinite length.",
          }),
      })
      .meta({
        description:
          "An object of allowed characters or a regex string that it must match",
      }),
    regex: z.string().optional().meta({
      description: "A Regex string that the flag must match to work.",
    }),
  })
  .meta({
    description:
      "How to provide a custom flag for the challenge when producing a dynamic flag, or undefined if dynamic flags are not supported.",
  });
