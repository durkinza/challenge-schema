import { z } from "zod";

export const ChallengePack = z
  .object({
    challenges: z.array(
      z.object({
        id: z.string().meta({
          description: "The unique identifier for the challenge bundle",
          examples: ["challenge-1", "challenge-2"],
        }),
        slug: z
          .string()
          .optional()
          .meta({
            description:
              "The short name for the challenge. Useful when the ID is a UUID.",
            examples: ["challenge-1", "challenge-2"],
          }),
        category: z.string().meta({
          description: "The category of the challenge",
          examples: ["web", "crypto", "forensics"],
        }),
        value: z.number().meta({
          description: "The score/value of the challenge",
          examples: [1, 20, 300],
        }),
        prerequisites: z
          .array(z.string())
          .optional()
          .meta({
            description:
              "The prerequisites of other challenges that must be solved before this challenge",
            examples: [["challenge-1", "challenge-2"]],
          }),
      }),
    ),
  })
  .meta({
    $schema: "https://json-schema.org/draft-07/schema",
    $id: "https://json.schemastore.org/ctf-challenge-pack",
    title: "CTF Challenge Pack",
    version: process.env.npm_package_version,
    description:
      "A pack of challenges, including their categories, values, and prerequisites.",
  });

export default ChallengePack;
