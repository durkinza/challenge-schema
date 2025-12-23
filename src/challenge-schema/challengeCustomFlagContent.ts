import { z } from "zod";
export const challengeCustomFlag = z
  .object({
    allowedCharacters: z.union([
      z.string().min(1).meta({
        description:
          "Exact string of allowed characters (e.g., '01' for binary, 'ACGT' for DNA, '0123456789abcdef' for hex)",
      }),
      z
        .object({
          lowercase: z
            .boolean()
            .meta({
              description:
                "If lowercase characters are allowed in the flag. /[a-z]*/",
            })
            .default(true)
            .optional(),
          uppercase: z
            .boolean()
            .meta({
              description:
                "If uppercase characters are allowed in the flag. /[A-Z]*/",
            })
            .default(true)
            .optional(),
          numbers: z
            .boolean()
            .meta({
              description:
                "If numbers characters are allowed in the flag. /[0-9]*/",
            })
            .default(true)
            .optional(),
          specialCharacters: z
            .union([z.boolean(), z.string().min(1)])
            .default(true)
            .optional()
            .meta({
              description:
                "Include special characters. true = default set [_=!#$%&()*+,-.:'/?@ ], false = none, or provide custom more specific string (e.g., '!@#$' or emojis '😀😁😂')",
            }),
        })
        .meta({
          description:
            "Character categories that will be combined into a character set for flag generation",
        }),
    ]),
    length: z
      .object({
        min: z
          .number()
          .int()
          .positive()
          .default(1)
          .optional()
          .meta({ description: "The minimum length of the flag" }),
        max: z
          .number()
          .int()
          .positive()
          .default(Number.MAX_SAFE_INTEGER)
          .optional()
          .meta({ description: "The maximum length of the flag" }),
      })
      .optional()
      .refine(
        (val) => !val || (val.min || 1) <= (val.max || Number.MAX_SAFE_INTEGER),
        {
          message:
            "Minimum length must be less than or equal to maximum length",
        },
      )
      .meta({
        description: "The length of the flag. Default: min=1, max=infinite",
      }),
  })
  .optional()
  .meta({
    description:
      "specifies what characters are allowed in the flag when producing a dynamic flag, or undefined if dynamic flags are not supported.",
  });
