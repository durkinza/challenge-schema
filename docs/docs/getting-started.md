
# Getting Started with Challenge Bundle Schema

This guide will help you get started with creating a challenge bundle using the Challenge Bundle Schema.
If you don't want to use any of the provided tools, you can skip to [Creating a basic challenge](#creating-a-basic-challenge)

## Installation (Optional)

You can install the Challenge Bundle Schema package in your project using any major node package manager:

```bash
# Using npm
npm install @durkinza/challenge-bundle-schema

# Using yarn
yarn add @durkinza/challenge-bundle-schema

# Using pnpm
pnpx add @durkinza/challenge-bundle-schema

# Using Bun
bun add @durkinza/challenge-bundle-schema
```

## Running validation locally
If you want to test your challenge.json file locally, the provided package can also be executed directly

```bash
# Using npx
npx @durkinza/challenge-bundle-schema validate challenge.json
npx @durkinza/challenge-bundle-schema validate -t pack challenge-pack.json

# Using pnpx
pnpx @durkinza/challenge-bundle-schema validate challenge.json
pnpx @durkinza/challenge-bundle-schema validate -t pack challenge-pack.json

# Using Bunx
bunx @durkinza/challenge-bundle-schema validate challenge.json
bunx @durkinza/challenge-bundle-schema validate -t pack challenge-pack.json
```

## Setting up IDE code completion

If you like code completion, setting up the json-schema will tell your IDE how the schema looks and then your IDE can provide code completion options.

### VSCode
To tell VSCode to exect all challnge.json and challenge-pack.json files to follow this scheme:

```json
"json.schemas": [
    {
        "fileMatch": [
            "/challenge.json",
        ],
        "url": "https://github.com/durkinza/challenge-bundle-schema/releases/download/0.0.1/challenge.schema.json"
    },
    {
        "fileMatch": [
            "/challenge-pack.json",
        ],
        "url": "https://github.com/durkinza/challenge-bundle-schema/releases/download/0.0.1/challenge-pack.schema.json"
    },
```

### Referencing schema directly in json files

If you prefer to configure the schema on individual files, JSON provides a `$schema` field that can do just that:
```bash
# Add $schema to challenge.json file
{
    "$schema": "https://github.com/durkinza/challenge-bundle-schema/releases/download/0.0.1/challenge.schema.json",
    ...// Rest of Json file.
}
```
This will help with autocompletion and validation of challenge.json files.


```bash
# Add $schema to challenge-pack.json file
{
    "$schema": "https://github.com/durkinza/challenge-bundle-schema/releases/download/0.0.1/challenge-pack.schema.json",
    ...// Rest of Json file.
}
```
This will help with autocompletion and validation of challenge-pack.json files.

similarly, a challenge.yml and challenge-pack.yml file can be setup with 
```bash
# Add $schema to challenge.json file
$schema: https://github.com/durkinza/challenge-bundle-schema/releases/download/0.0.1/challenge.schema.json
# Rest of Json file.
```
This will help with autocompletion and validation of challenge.json files.


```bash
# Add $schema to challenge-pack.json file
$schema: https://github.com/durkinza/challenge-bundle-schema/releases/download/0.0.1/challenge-pack.schema.json
# Rest of Json file.
```
<br/>

# Creating a basic challenge. 

The heart of your challenge bundle is going to be the `challenge.json` file that says how everything goes together.

For some small trivia sized challenges, it's likely you _only_ need a `challenge.json` file.  
If your challenge requires a script to build or has a service that will be hosted, then you will also need to provide these resources in your bundle.

For this walkthrough, let's start with a simple trivia challenge.

### 1. Create a challenge.json Definition

Create a `challenge.json` file to hold the information about your challenge.

An example challenge.json can be created with the following structure:

```json
{
  "$schema": "https://github.com/durkinza/challenge-bundle-schema/releases/download/0.0.1/challenge.schema.json",
  "name": "My Trivia Challenge",
  "description": "A simple trivia challenge for the schema walkthrough",
  "prompt": "Your challenge, should you choose to accept it, is to enter flag{my_flag_value} to get points!",
  "category": ["trivia", "examples"],
  "points": 100,
  "author": {
    "name": "Your Name",
    "email": "your.email@example.com"
  },
  "flag": [
    {
        "type": "string",
        "value": "flag{my_flag_value}"
    }
  ]
}
```
If you've configured your IDE with the json schema, you can leave off the "$schema" field.

## Next Steps

- Explore the [Challenge Bundle Schema Reference](ChallengeSchema/index.md) for more detailed information about available options
- Check out the [Examples](examples/index.md) to see more complex examples.