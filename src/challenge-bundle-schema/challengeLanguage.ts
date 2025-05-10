import { z } from "zod";
export const challengeLanguage = z.string().meta({
  description: "The language used to create the challenge.",
  examples: ["English", "French", "Spanish"],
});
