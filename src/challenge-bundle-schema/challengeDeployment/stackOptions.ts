import { z } from "zod";

export const stackOptions = z
  .object({
    driver: z.string().meta({
      description:
        "The hosting driver to use for the challenge, e.g. 'docker-compose', 'kubernetes', 'vmware', 'ESXi'",
    }),
    composeFile: z.string().meta({
      description: "The docker-compose file to use for the challenge",
    }),
  })
  .optional();
