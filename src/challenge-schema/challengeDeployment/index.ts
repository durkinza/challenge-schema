import { z } from "zod";

import { challengeAttachments } from "../challengeAttachments";
import { containerOptions } from "./containerOptions";
import { scriptOptions } from "./scriptOptions";
import { stackOptions } from "./stackOptions";

export const challengeDeployment = z
  .discriminatedUnion("type", [
    z.object({
      type: z.literal("hosted"),
      hosted: z
        .object({
          container: containerOptions.optional(),
          stack: stackOptions.optional(),
          attachments: challengeAttachments.optional(),
        })
        .meta({
          description:
            "Configuration for challenges that require a hosted container",
        }),
    }),
    z.object({
      type: z.literal("standard"),
      standard: z
        .object({
          build: z
            .discriminatedUnion("buildType", [
              z.object({
                buildType: z.literal("script"),
                script: scriptOptions,
              }),
              z.object({
                buildType: z.literal("container"),
                container: containerOptions.omit({ ports: true }),
              }),
            ])
            .optional()
            .meta({
              description:
                "How to build the challenge, only required if dynamic flags are supported",
            }),
          attachments: challengeAttachments,
        })
        .meta({
          description:
            "Configuration for challenges that do not require a hosted container",
        }),
    }),
  ])
  .meta({
    description:
      "How the challenge should be deployed. Either 'hosted' or 'standard', but not both.",
  });

export * from "./buildOutputs";
export * from "./containerOptions";
export * from "./scriptOptions";
export * from "./stackOptions";

export default challengeDeployment;
