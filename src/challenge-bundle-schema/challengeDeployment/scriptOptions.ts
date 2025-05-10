import { z } from "zod";

import { buildOutputs } from "./buildOutputs";

export const scriptOptions = z.object({
  path: z.string().meta({
    description: "The path to the script to run, e.g. '/tmp/build.sh'",
  }),
  flagArg: z.string().meta({
    description:
      "The argument to pass to the script, e.x. 'flag' == '--flag flag{this_is_a_flag}'",
  }),
  outputs: buildOutputs.meta({
    description: "The outputs of the build process",
  }),
});
