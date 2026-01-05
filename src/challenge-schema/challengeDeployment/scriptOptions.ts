import { z } from "zod";

import { ArgumentAndEnvironmentVariables } from "./argsAndEnvs";
import { buildOutputs } from "./buildOutputs";

export const scriptOptions = z.object({
  path: z.string().meta({
    description: "The path to the script to run, e.g. '/tmp/build.sh'",
  }),
  parameters: ArgumentAndEnvironmentVariables.optional().meta({
    description:
      "The arguments and environment variables that can be provided to the script at runtime.",
  }),
  outputs: buildOutputs.meta({
    description: "The outputs of the build process",
  }),
});
