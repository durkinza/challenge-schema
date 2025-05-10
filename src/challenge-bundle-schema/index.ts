import { z } from "zod";

import { challengeAuthor } from "./challengeAuthor";
import { challengeCustomFlag } from "./challengeCustomFlag";
import { challengeDefaultFlag } from "./challengeDefaultFlag";
import { challengeDeployment } from "./challengeDeployment";
import { challengeLanguage } from "./challengeLanguage";
import { challengeSolutions } from "./challengeSolutions";

export const ChallengeBundle = z
  .object({
    name: z.string().meta({ description: "The name of the challenge" }),
    description: z
      .string()
      .optional()
      .meta({ description: "A short description of the challenge." }),
    defaultFlag: challengeDefaultFlag,
    customFlag: challengeCustomFlag,
    deployment: challengeDeployment,
    author: challengeAuthor,
    language: challengeLanguage,
    solutions: challengeSolutions,
  })
  .meta({
    id: "ctf-challenge-bundle",
    title: "CTF Challenge Bundle",
    version: process.env.npm_package_version,
    description:
      "A bundle of information about a challenge, including its name, description, default flag, custom flag, deployment, author, language, and solutions.",
  });

export * from "./challengeAttachements";
export * from "./challengeAuthor";
export * from "./challengeCustomFlag";
export * from "./challengeDefaultFlag";
export * from "./challengeDeployment";
export * from "./challengeLanguage";
export * from "./challengeSolutions";
export default ChallengeBundle;
