import { z } from "zod";

import pjson from "../../package.json";

const version: string = pjson.version;
export const ChallengePack = z
  .object({
    challenges: z.array(
      z.object({
        path: z.string().meta({
          description: "The location of the challenge bundle",
          examples: ["./challenge-1", "/home/bob/challenges/challenge-1"],
        }),
        id: z.string().meta({
          description: "The unique identifier for the challenge bundle",
          examples: ["challenge-1", "challenge-2"],
        }),
        category: z
          .string()
          .meta({
            description:
              "The category of the challenge. If not provided, it will default to the category in the challenge.",
            examples: ["web", "crypto", "forensics"],
          })
          .optional(),
        points: z
          .number()
          .meta({
            description:
              "The score/value/points of the challenge. If not provided, it will default to the points value from the challenge.",
            examples: [1, 20, 300],
          })
          .optional(),
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
    $id: `https://json.schemastore.org/ctf-challenge-pack.schema.json`,
    title: "CTF Challenge Pack",
    version: `${version}`,
    description:
      "A pack of challenges, including overriding value, categories, and prerequisites.",
  });

export default ChallengePack;
