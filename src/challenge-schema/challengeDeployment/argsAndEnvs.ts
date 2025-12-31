import { z } from "zod";

export const ArgumentAndEnvironmentVariables = z.object({
  arguments: z
    .array(
      z.object({
        key: z.string().meta({
          description: "The argument name that is accepted.",
          examples: ["--playerName", "--teamName", "--flag"],
        }),
        description: z.string().meta({
          description:
            "Description of the argument and the type of value it expects.",
          examples: [
            "The Player Name argument customizes the challenge welcome message for the player.",
          ],
        }),
      }),
    )
    .optional()
    .meta({
      description: "The arguments that are accepted.",
      examples: [
        {
          key: "--playerName",
          description:
            "The Player Name argument customizes the challenge welcome message for the player.",
        },
      ],
    }),
  environmentVariables: z
    .array(
      z.object({
        key: z.string().meta({
          description: "The environment variable name that is accepted.",
          examples: ["OPENAPI_KEY"],
        }),
        description: z.string().meta({
          description:
            "Description of the environment variable and the type of value it expects.",
          examples: [
            "Accepts the API secret key for accessing the OpenAPI service.",
          ],
        }),
      }),
    )
    .meta({
      description: "The environment variables that are accepted",
      examples: [
        {
          key: "OPENAPI_KEY",
          description:
            "Accepts the API secret key for accessing the OpenAPI service.",
        },
      ],
    })
    .optional(),
});

const ArgsAndEnvAndFlagArg = ArgumentAndEnvironmentVariables.extend({
  flagArgumentName: z
    .string()
    .optional()
    .meta({
      description: "The argument to use for the dynamic flags.",
      examples: ["--flag", "-f"],
    }),
}).refine(
  (data) => {
    // If flagArgumentName is provided, it must exist in arguments
    if (data.flagArgumentName && data.arguments) {
      return data.arguments.some((arg) => arg.key === data.flagArgumentName);
    }
    return false;
  },
  {
    message: "Flag argument name must exist in the arguments list",
    path: ["flagArgumentName"],
  },
);

const ArgsAndEnvAndFlagEnv = ArgumentAndEnvironmentVariables.extend({
  flagEnvironmentVariableName: z
    .string()
    .optional()
    .meta({
      description: "The environment to use for the dynamic flags.",
      examples: ["FLAG", "DYNAMIC_FLAG"],
    }),
}).refine(
  (data) => {
    // If flagArgumentName is provided, it must exist in arguments
    if (data.flagEnvironmentVariableName && data.environmentVariables) {
      return data.environmentVariables.some(
        (env) => env.key === data.flagEnvironmentVariableName,
      );
    }
    return false;
  },
  {
    message:
      "Flag environment variable name must exist in the environment variables list",
    path: ["flagEnvironmentVariableName"],
  },
);

export const ArgumentsEnvironmentVariablesAndFlags = z.union([
  ArgsAndEnvAndFlagArg,
  ArgsAndEnvAndFlagEnv,
]);
