import { z } from "zod";

import pjson from "../../package.json";
import { challengeAuthor } from "./challengeAuthor";
import { challengeDeployment } from "./challengeDeployment";
import { challengeFlag } from "./challengeFlag";
import { challengeSolutions } from "./challengeSolutions";

const version: string = pjson.version;

export const Challenge = z
  .object({
    name: z.string().meta({ description: "The name of the challenge" }),
    description: z
      .string()
      .meta({ description: "A short description of the challenge." })
      .optional(),
    deployment: challengeDeployment,
    author: challengeAuthor.optional(),
    language: z
      .string()
      .meta({
        description: "The language used to create the challenge.",
        examples: ["English", "French", "Spanish"],
      })
      .optional(),
    solutions: challengeSolutions.optional(),
    flag: challengeFlag,
    points: z
      .number()
      .default(0)
      .meta({
        meta: { description: "The default recommended value of the challenge" },
        examples: [1, 20, 300],
      }),
    category: z.string().meta({
      description: "The default recommended category of the challenge.",
      examples: ["Web", "RevEng", "crypto"],
    }),
  })
  .meta({
    $schema: "https://json-schema.org/draft-07/schema",
    $id: `https://json.schemastore.org/ctf-challenge-bundle.schema.json`,
    title: "CTF Challenge Bundle",
    version: `${version}`,
    description:
      "A bundle of information about a challenge, including its name, description, default flag, custom flag, deployment, author, language, and solutions.",
  });

export * from "./challengeAttachements";
export * from "./challengeAuthor";
export * from "./challengeCustomFlag";
export * from "./challengeDefaultFlag";
export * from "./challengeDeployment";
export * from "./challengeSolutions";
export default Challenge;

/**
{
...
flag: {
  customFlag: {
    allowedCharacters: {
      lowercase: true,  
      uppercase: true,
      numbers: true,
      specialCharacters: true,
      length: {
        min: 10,
        max: 20,
      },
    },
    validationRegex: "/[\w\W]+/i",
  },
  defaultFlags: [
      {
        type: "string",
        value: "flag{this_is_a_flag}",
      },
      {
        type: "regex",
        value: "/(flag)?{?this_is_a_flag}?/i",
      },
      {
        type: "code",
        stdin: "",
        stdout: "asdf",
      },
      {
        type: "custom",
      },
    ]
  }
}


flag: {
    generation: {
        allowedChars: {
            lowercase: boolean,
            uppercase: boolean,
            numbers: boolean,
            specialCharacters: boolean,
            length: {
                min: number,
                max: number
            }
        },
        regex: string
    } | undefined,
    validation: {
      regex: string[] | undefined,
      static: string[],
      code: [
          {
              stdin: string,
              stdout: string
          }
          // ...
      ],
      programmable: string[],
      custom: [{
        myweirdflag: string,
      }]
    }
}
...
}
//  */
