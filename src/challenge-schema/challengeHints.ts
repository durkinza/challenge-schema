import { z } from "zod";
export const challengeHints = z
  .array(
    z.object({
      id: z.number().meta({ description: "A unique identifier for the hint" }),
      title: z.string().meta({
        description:
          "The title of the hint, displayed to participants before they use it",
      }),
      hint: z.string().meta({
        description: "The content of the hint provided to participants",
      }),
      cost: z
        .number()
        .optional()
        .meta({ description: "The cost of the hint in points" }),
      requirements: z.array(z.number()).optional().meta({
        description:
          "List of hints ids that must be used before this hint can be used",
      }),
    }),
  )
  .superRefine((data, ctx) => {
    const ids = data.map((item) => item.id);
    const uniqueIds = new Set(ids);

    if (ids.length !== uniqueIds.size) {
      ctx.addIssue({
        code: "custom",
        message: `Hints must have unique ids.`,
        input: data,
        path: ["id"],
      });
    }
  })
  .meta({
    description:
      "Hints that can be provided to participants during the challenge",
  });
