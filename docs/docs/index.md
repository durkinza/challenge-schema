
# CTF Challenge Schemas

The CTF Challenge Bundle and CTF Challenge Pack specifications are standardized formats for creating, sharing, and deploying cybersecurity Capture the Flag (CTF) challenges.


## Documentation Contents

- [Getting Started](getting-started.md) - Quick start guide for using the schemas
- [Challenge Bundle Schema Reference](ChallengeSchema/index.md) - Detailed schema documentation
- [Challenge Pack Schema Reference](ChallengePackSchema/index.md) - Detailed schema documentation
- [Examples](examples/index.md) - Real-world examples of schema usage


## What is a Challenge Bundle?
A Challenge Bundle is a grouping of a `challenge.json` file that follows the [challenge bundle Schema](#what-is-the-challenge-bundle-schema) and the necessary source files for a challenge. 
The grouping is typically a zip of the files together into a portable bundle.

## What is the Challenge Bundle Schema?

The Challenge Bundle Schema is a JSON specification that defines a standardized format for creating, sharing, and deploying a cybersecurity Capture the Flag (CTF) challenge. It enables challenge authors to define the challenge information, build process, deployment options, and even how to generate flags for their challenges in a consistent way.

## What is a Challenge Pack?

A Challenge Pack is the grouping of a `challenge-pack.json` file that follows the [challenge pack schema](#what-is-the-challenge-pack-schema) and all applicable [challenge bundles](#what-is-a-challenge-bundle). 
The grouping is typically a zip of the files together into a portable pack of challenges.

## What is the Challenge Pack Schema?

The Challenge Pack Schema is a JSON specification that defines a standardized format for a grouping of [challenge bundles](#what-is-a-challenge-bundle). It enables event coordinators and challenge authors to define a grouping of challenges that work well together.


## Provided Tools

Along with defining the schemas, this project provides a few ways to validate that a json file matches the schema properly.
Check out the [Getting Started](getting-started.md) page for more information on how to setup these tools.

For challenge bundle and challenge pack authors, 
a json spec is published for each schema and can be used in IDEs to help in code completion and generation.
There is also a command line tool for validation of a json file.

For  [challenge forge](terminology/index.md#challenge-forge) authors, a npm module is published to assist in validating provided bundles and packs using the zod parser.

## Key Features of this Project

- **Standardized Format**: Consistent structure for defining challenges, their flags, and their deployments.
- **Deployment Options**: Support for various deployment configurations.
- **Validation**: Tools for validating the challenge bundle and challenge pack schemas.
- **Challenge Packs**: A structure for multiple challenge deployments on top of individual challenge bundles.