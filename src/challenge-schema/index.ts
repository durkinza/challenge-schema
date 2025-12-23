import { z } from "zod";

import pjson from "../../package.json";
import { challengeAuthor } from "./challengeAuthor";
import { challengeDeployment } from "./challengeDeployment";
import { challengeFlag } from "./challengeFlag";
import { challengeHints } from "./challengeHints";
import { challengeSolutions } from "./challengeSolutions";

const version: string = pjson.version;

export const Challenge = z
  .object({
    name: z.string().meta({ description: "The name of the challenge" }),
    description: z
      .string()
      .meta({ description: "A short description of the challenge." })
      .optional(),
    deployment: challengeDeployment,
    author: challengeAuthor.optional(),
    language: z
      .string()
      .meta({
        description: "The language used to create the challenge.",
        examples: ["English", "French", "Spanish"],
      })
      .optional(),
    hints: challengeHints.optional(),
    solutions: challengeSolutions.optional(),
    flag: challengeFlag,
    points: z
      .number()
      .default(0)
      .meta({
        meta: { description: "The default recommended value of the challenge" },
        examples: [1, 20, 300],
      }),
    category: z.string().meta({
      description: "The default recommended category of the challenge.",
      examples: ["Web", "RevEng", "crypto"],
    }),
  })
  .meta({
    $schema: "https://json-schema.org/draft-07/schema",
    $id: `https://json.schemastore.org/ctf-challenge.schema.json`,
    title: "CTF Challenge",
    version: `${version}`,
    description:
      "A bundle of information about a cybersecurity Capture the Flag (CTF) challenge, covering the deployment instructions, flag options, and other challenge metadata.",
  });

export * from "./challengeAttachments";
export * from "./challengeAuthor";
export * from "./challengeCustomFlag";
export * from "./challengeDefaultFlag";
export * from "./challengeDeployment";
export * from "./challengeSolutions";
export default Challenge;
