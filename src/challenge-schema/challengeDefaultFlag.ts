import { z } from "zod";

export const challengeDefaultFlag = z
  .object({
    static: z.array(z.string().min(1)).optional().meta({
      description: "List of possible static flags for the challenge.",
    }),
    regex: z.array(z.string().min(1)).optional().meta({
      description:
        "List of possible regex patterns for validating flags for the challenge.",
    }),
  })
  .refine(
    (val) => (val.static?.length ?? 0) > 0 || (val.regex?.length ?? 0) > 0,
    {
      message: "At least one of 'static' or 'regex' must be non-empty",
    },
  )
  .meta({
    description: "The default static flag of the challenge.",
  });
