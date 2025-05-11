import { z } from "zod";

import { buildOutputs } from "./buildOutputs";

export const containerOptions = z.object({
  image: z.string().meta({
    description: "The image name to use for the challenge.",
    examples: ["neverlanctf/cookie-monster:latest"],
  }),
  imageTar: z
    .any()
    .optional()
    .meta({ description: "The tar file containing the challenge image" }),
  imageDigest: z.string().optional().meta({
    description:
      "The digest of the image to use for the challenge, e.g. sha256:1234567890abcdef",
  }),
  driver: z.string().meta({
    description:
      "The hosting driver to use for the challenge, e.g. 'docker', 'podman', 'containerd', 'vmware', 'kvm', 'lxc', 'kubernetes'",
  }),
  resourceRequirements: z
    .object({
      cpu: z.number().optional().meta({
        description: "The minimum CPU required for the challenge, e.g. 1024",
      }),
      memory: z.string().optional().meta({
        description:
          "The minimum memory required for the challenge, e.g. '256Mi'",
      }),
      disk: z.string().optional().meta({
        description: "The minimum disk required for the challenge, e.g. '1Gi'",
      }),
      gpu: z.number().optional().meta({
        description: "The minimum GPU required for the challenge, e.g. 0.5",
      }),
    })
    .optional()
    .meta({ description: "The minimum resources the container requires" }),
  ports: z
    .array(
      z.object({
        port: z.number().meta({
          description: "The port to expose for the challenge, e.g. 80, 443, 22",
        }),
        protocol: z.string().meta({
          description:
            "The protocol to expect for the port, e.g. 'tcp', 'udp', 'http'",
        }),
      }),
    )
    .meta({
      description: "The ports to expose for the challenge",
    }),
  flagArg: z.string().optional().meta({
    description:
      "The argument to pass to the container, e.g. '--flag flag{this_is_a_flag}'",
  }),
  outputs: buildOutputs
    .optional()
    .meta({ description: "The attachment outputs from the container." }),
});
