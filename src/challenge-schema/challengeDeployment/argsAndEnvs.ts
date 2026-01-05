import { z } from "zod";

export const ArgumentAndEnvironmentVariables = z
  .object({
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
    flagArgumentName: z
      .string()
      .optional()
      .meta({
        description: "The argument to use for the dynamic flags.",
        examples: ["--flag", "-f"],
      }),
    flagEnvironmentVariableName: z
      .string()
      .optional()
      .meta({
        description: "The environment variable to use for the dynamic flags.",
        examples: ["FLAG", "DYNAMIC_FLAG"],
      }),
  })
  .refine(
    (data) => {
      // If flagArgumentName is provided, it must exist in arguments
      if (data.flagArgumentName) {
        if (
          !data.arguments ||
          !data.arguments.some((arg) => arg.key === data.flagArgumentName)
        ) {
          return false;
        }
      }
      return true;
    },
    {
      message:
        "flagArgumentName must reference an existing argument in the arguments list",
      path: ["flagArgumentName"],
    },
  )
  .refine(
    (data) => {
      // If flagEnvironmentVariableName is provided, it must exist in environmentVariables
      if (data.flagEnvironmentVariableName) {
        if (
          !data.environmentVariables ||
          !data.environmentVariables.some(
            (env) => env.key === data.flagEnvironmentVariableName,
          )
        ) {
          return false;
        }
      }
      return true;
    },
    {
      message:
        "flagEnvironmentVariableName must reference an existing environment variable in the environmentVariables list",
      path: ["flagEnvironmentVariableName"],
    },
  );
