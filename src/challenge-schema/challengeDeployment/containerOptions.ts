import { z } from "zod";

import { ArgumentsEnvironmentVariablesAndFlags } from "./argsAndEnvs";
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
  imageDigest: z
    .string()
    .optional()
    .meta({
      description: "The digest of the image to use for the challenge.",
      examples: [
        "sha256:1e7a98fb738c261b2285443fa19194ff6318104564049b32832464f5f238d1f9",
      ],
    }),
  driver: z.string().meta({
    description: "The hosting driver to use for the challenge.",
    examples: [
      "docker",
      "podman",
      "containerd",
      "vmware",
      "kvm",
      "lxc",
      "kubernetes",
    ],
  }),
  resourceRequirements: z
    .object({
      cpu: z
        .number()
        .optional()
        .meta({
          description: "The minimum CPU required for the challenge.",
          examples: [1024, 512, 2048],
        }),
      memory: z
        .string()
        .optional()
        .meta({
          description: "The minimum memory required for the challenge.",
          examples: ["512Mi", "1Gi"],
        }),
      disk: z
        .string()
        .optional()
        .meta({
          description: "The minimum disk required for the challenge.",
          examples: ["500Mi", "2Gi"],
        }),
      gpu: z
        .number()
        .optional()
        .meta({
          description: "The minimum GPU required for the challenge.",
          examples: [0, 0.5, 1],
        }),
    })
    .optional()
    .meta({ description: "The minimum resources the container requires" }),
  ports: z
    .array(
      z.object({
        port: z.number().meta({
          description: "The port to expose for the challenge.",
          examples: [80, 443, 22],
        }),
        protocol: z.string().meta({
          description: "The protocol to expect for the port.",
          examples: ["tcp", "udp", "http", "https"],
        }),
      }),
    )
    .meta({
      description: "The ports to expose for the challenge",
    }),
  parameters: ArgumentsEnvironmentVariablesAndFlags,
  outputs: buildOutputs
    .optional()
    .meta({ description: "The attachment outputs from the container." }),
});
