export * from "./challenge-bundle-schema";
export * from "./challenge-pack-schema";
import { ChallengeBundle } from "./challenge-bundle-schema";
import { ChallengePack } from "./challenge-pack-schema";

export const validateChallengeBundle = (data: unknown) => {
  const result = ChallengeBundle.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Challenge bundle validation failed: ${JSON.stringify(result.error)}`,
    );
  }
  return result.data;
};
export const validateChallengePack = (data: unknown) => {
  const result = ChallengePack.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Challenge pack validation failed: ${JSON.stringify(result.error)}`,
    );
  }
  return result.data;
};
