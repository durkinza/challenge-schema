import { z } from "zod";
export const buildOutputs = z
  .array(
    z.object({
      key: z.string().meta({
        description:
          "The key/name of the output to be referenced in the attachment step",
      }),
      path: z.string().meta({
        description:
          "The path to the file in the container, e.g. '/tmp/artifact.zip'",
      }),
    }),
  )
  .optional()
  .meta({
    description:
      "The outputs of the container that can be used in the attachments step",
  });
