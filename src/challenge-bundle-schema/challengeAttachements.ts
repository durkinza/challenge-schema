import { z } from "zod";

const challengeAttachmentBase = z
  .object({
    name: z
      .string()
      .meta({ description: "The name of the file, e.g. 'artifact.zip'" }),
    type: z.string().meta({
      description:
        "The type of the file, e.g. 'application/zip', 'image/png', 'text/plain'",
    }),
    key: z.string().meta({
      description: "The key/name of the file to be used in the attachment step",
    }),
    path: z
      .string()
      .optional()
      .meta({ description: "The path to the file, e.g. '/tmp/artifact.zip'" }),
    url: z.string().optional().meta({
      description:
        "The URL of the file, e.g. 'https://example.com/artifact.zip'",
    }),
    content: z.string().optional().meta({
      description: "The raw content of the attachment, e.g. 'Hello World'",
    }),
  })
  .meta({
    description: "The attachment provided to the player of the challenge",
  });

const challengeAttachmentFromFile = challengeAttachmentBase
  .pick({ name: true, type: true, path: true })
  .meta({ description: "An attachment provided as a file to the player." });
const challengeAttachmentFromContainer = challengeAttachmentBase
  .pick({ name: true, type: true, key: true })
  .meta({
    description:
      "An attachment provided from the output of a container to the player.",
  });
const challengeAttachmentFromUrl = challengeAttachmentBase
  .pick({ name: true, type: true, url: true })
  .meta({ description: "An attachment provided as a URL to the player." });
const challengeAttachmentFromContent = challengeAttachmentBase
  .pick({ name: true, type: true, content: true })
  .meta({ description: "An attachment provided as text to the player." });

export const challengeAttachments = z
  .array(
    z.union([
      challengeAttachmentFromFile,
      challengeAttachmentFromContainer,
      challengeAttachmentFromUrl,
      challengeAttachmentFromContent,
    ]),
  )
  .meta({
    description:
      "Attachments must be a local file, URL, a file from the build step, or a raw string",
  });
