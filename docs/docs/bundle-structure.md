# Challenge Bundle Structure

A Challenge Bundle is a `.zip` file that contains everything needed to deploy your CTF challenge. This page explains how to structure your bundle and what files should be included.

## What Goes in a Bundle?

At minimum, a challenge bundle must contain:

- A `challenge.json` file in the root directory

Depending on your challenge type, you may also include:

- Source code files
- Build scripts
- Docker/container configurations  
- Static attachments for players
- Any other resources needed to run and complete the challenge

Checkout the [examples](examples/index.md) section for sample bundle structures.

## Next Steps

- Learn about [deployment options](ChallengeSchema/ChallengeDeployment/index.md)
- See complete [examples](examples/index.md)
- Understand [flag configuration](ChallengeSchema/challenge-default-flags.md)
