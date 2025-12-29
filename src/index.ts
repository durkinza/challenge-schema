export * from "./challenge-pack-schema";
export * from "./challenge-schema";
import { z } from "zod";

import { ChallengePack } from "./challenge-pack-schema";
import { Challenge } from "./challenge-schema";

export const validateChallengeBundle = (data: unknown) => {
  const result = Challenge.safeParse(data);
  if (!result.success) {
    throw new Error(`Challenge validation failed: ${result.error.message}`);
  }
  return result.data;
};
export const validateChallengePack = (data: unknown) => {
  const result = ChallengePack.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Challenge Pack validation failed: ${result.error.message}`,
    );
  }
  return result.data;
};
export type ChallengeBundleType = z.infer<typeof Challenge>;
export type ChallengePackType = z.infer<typeof ChallengePack>;
