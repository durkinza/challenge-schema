import { z } from "zod";
export const challengeSolutions = z.array(z.string()).meta({
  description:
    "A short write-up of how to solve the challenge for the event coordinators",
});
