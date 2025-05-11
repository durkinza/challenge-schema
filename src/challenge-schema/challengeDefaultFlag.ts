import { z } from "zod";

export const challengeDefaultFlag = z
  .array(
    z.object({
      type: z.string().meta({
        description: "The type of the flag.",
        examples: ["string", "regex"],
      }),
      value: z.string().meta({
        description: "The value of the flag.",
        examples: ["flag{this_is_a_flag}", "/(flag)?{?this_is_a_flag}?/i"],
      }),
    }),
  )
  .meta({
    description: "The default static flag of the challenge.",
  });
