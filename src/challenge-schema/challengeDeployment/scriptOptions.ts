import { z } from "zod";

import { ArgumentsEnvironmentVariablesAndFlags } from "./argsAndEnvs";
import { buildOutputs } from "./buildOutputs";

export const scriptOptions = z.object({
  path: z.string().meta({
    description: "The path to the script to run, e.g. '/tmp/build.sh'",
  }),
  parameters: ArgumentsEnvironmentVariablesAndFlags,
  // ...ArgumentsEnvironmentVariablesAndFlags.shape.options,
  outputs: buildOutputs.meta({
    description: "The outputs of the build process",
  }),
});
