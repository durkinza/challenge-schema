#!/usr/bin/env node

import { readFileSync } from "fs";
import { resolve } from "path";

import { validateChallengeBundle, validateChallengePack } from "./index";

const showHelp = () => {
  console.log(`
Challenge Schema Validator

Usage:
  bunx @durkinza/challenge-schema validate [options] <file-path>
  npx @durkinza/challenge-schema validate [options] <file-path>

Options:
  --type, -t <type>  Specify the type of file to validate (challenge or pack)
                     If not specified, will be inferred from filename
  --help, -h         Show this help message

Examples:
  bunx @durkinza/challenge-schema validate ./challenge.json
  npx @durkinza/challenge-schema validate --type challenge ./challenge.json
  bunx @durkinza/challenge-schema validate --type pack ./challenge-pack.json
`);
};

const main = async () => {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    showHelp();
    process.exit(0);
  }

  const command = args[0];

  if (command !== "validate") {
    console.error('Error: Only "validate" command is supported');
    showHelp();
    process.exit(1);
  }

  let type: "challenge" | "pack" | undefined;
  let filePath: string | undefined;

  // Parse arguments
  for (let i = 1; i < args.length; i++) {
    if (args[i] === "--type" || args[i] === "-t") {
      i++;
      if (i < args.length) {
        const typeArg = args[i].toLowerCase();
        if (typeArg === "challenge" || typeArg === "pack") {
          type = typeArg;
        } else {
          console.error(
            `Error: Invalid type "${args[i]}". Must be "challenge" or "pack"`,
          );
          process.exit(1);
        }
      } else {
        console.error("Error: --type requires a value");
        process.exit(1);
      }
    } else if (!args[i].startsWith("-")) {
      filePath = args[i];
    }
  }

  if (!filePath) {
    console.error("Error: File path is required");
    showHelp();
    process.exit(1);
  }

  // Resolve the file path
  const resolvedPath = resolve(process.cwd(), filePath);

  try {
    // Read file
    const fileContent = readFileSync(resolvedPath, "utf-8");
    let data: unknown;

    try {
      data = JSON.parse(fileContent);
    } catch (error: any) {
      console.error(`Error: Invalid JSON file: ${error.message}`);
      process.exit(1);
    }

    // Infer type from filename if not specified
    if (!type) {
      if (resolvedPath.includes("challenge-pack")) {
        type = "pack";
      } else if (resolvedPath.includes("challenge")) {
        type = "challenge";
      } else {
        console.error(
          "Error: Could not infer file type. Please specify with --type",
        );
        process.exit(1);
      }
    }

    // Validate based on type
    try {
      if (type === "challenge") {
        validateChallengeBundle(data);
        console.log(`Challenge validation successful`);
        // console.log(JSON.stringify(result, null, 2));
      } else {
        validateChallengePack(data);
        console.log(`Challenge Pack validation successful`);
        // console.log(JSON.stringify(result, null, 2));
      }
    } catch (error: any) {
      console.error(error.message);
      process.exit(1);
    }
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
  }
};

main().catch((error: any) => {
  console.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});
