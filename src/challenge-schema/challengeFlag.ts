import { z } from "zod";
export const challengeFlag = z
  .object({
    generation: z
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
              .object({
                min: z
                  .number()
                  .meta({ description: "The minimum length of the flag" }),
                max: z
                  .number()
                  .meta({ description: "The maximum length of the flag" }),
              })
              .optional()
              .meta({
                description:
                  "The length of the flag. Default: infinite length.",
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
      .optional()
      .meta({
        description:
          "How to provide a custom flag for the challenge when producing a dynamic flag, or undefined if dynamic flags are not supported.",
      }),
    validation: z
      .object({
        regex: z.array(z.string()).optional().meta({
          description: "Regex strings that the correct flag would match.",
        }),
        static: z
          .array(z.string())
          .meta({
            description: "Static flag values.",
          })
          .nonempty(),
      })
      .meta({
        description:
          "How to validate the flag when it is submitted. Can be an array of regex strings.",
      }),
  })
  .meta({
    description: "The flag the generation and validation methods for the flag.",
  });
