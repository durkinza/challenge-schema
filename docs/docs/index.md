
!!! warning "Early Development Notice"
    Warning this project is still very early in development. The schemas and documentation may change drastically and frequently.
    Please provide feedback or open issues on GitHub if you have any suggestions or find any problems.

# CTF Challenge Schemas

The CTF Challenge Bundle and CTF Challenge Pack specifications are standardized formats for creating, sharing, and deploying cybersecurity Capture the Flag (CTF) challenges.

## Documentation Contents

- [Getting Started](getting-started.md) - Quick start guide for using the schemas
- [Bundle Structure](bundle-structure.md) - How to organize your challenge bundle files
- [Challenge Bundle Schema Reference](ChallengeSchema/index.md) - Detailed schema documentation
- [Challenge Pack Schema Reference](ChallengePackSchema/index.md) - Detailed schema documentation  
- [Examples](examples/index.md) - Real-world examples of schema usage
- [FAQ](FAQ.md) - Frequently asked questions
- [Terminology](terminology/index.md) - Glossary of terms


## What is a Challenge Bundle?
A Challenge Bundle is a grouping of a `challenge.json` file that follows the [challenge bundle Schema](#what-is-the-challenge-schema) and the necessary source files for a challenge. 
The grouping is typically a zip of the files together into a portable bundle.

## What is the Challenge Bundle Schema?

The Challenge Bundle Schema is a JSON specification that defines a standardized format for creating, sharing, and deploying a cybersecurity Capture the Flag (CTF) challenge. It enables challenge authors to define the challenge information, build process, deployment options, and even how to generate flags for their challenges in a consistent way.

## What is a Challenge Pack?

A Challenge Pack is the grouping of a `challenge-pack.json` file that follows the [challenge pack schema](#what-is-the-challenge-pack-schema) and all applicable [challenge bundles](#what-is-a-challenge-bundle). 
The grouping is typically a zip of the files together into a portable pack of challenges.

## What is the Challenge Pack Schema?

The Challenge Pack Schema is a JSON specification that defines a standardized format for a grouping of [challenge bundles](#what-is-a-challenge-bundle). It enables event coordinators and challenge authors to define a grouping of challenges that work well together, including prerequisites and relationships between challenges.


## Provided Tools

Along with defining the schemas, this project provides a few ways to validate that a json file matches the schema properly.
Check out the [Getting Started](getting-started.md) page for more information on how to setup these tools.

For challenge bundle and challenge pack authors, 
a json spec is published for each schema and can be used in IDEs to help in code completion and generation.
There is also a command line tool for validation of a json file.

For  [challenge forge](terminology/index.md#challenge-forge) authors, a npm module is published to assist in validating provided bundles and packs using the zod parser.

## Key Features of this Project

- **Standardized Format**: Consistent structure for defining challenges, their flags, and their deployments.
- **Flexible Deployment**: Support for both file-based (standard) and hosted (container) deployments.
- **Dynamic Flags**: Generate unique flags per player or team with customizable character sets.
- **Build Automation**: Define build processes using scripts or containers.
- **Challenge Relationships**: Create progressive learning paths with prerequisites in challenge packs.
- **Validation Tools**: CLI and npm package for validating bundles and packs.
- **IDE Support**: JSON schema for autocompletion in modern IDEs.

## Quick Start

1. **Install the validation tool** (optional):
   ```bash
   npm install -g @durkinza/challenge-schema
   ```

2. **Create a simple challenge.json**:
   ```json
   {
     "name": "My First Challenge",
     "description": "A simple CTF challenge",
     "category": "misc",
     "points": 100,
     "defaultFlag": {
       "static": ["flag{hello_world}"]
     },
     "deployment": {
       "type": "standard",
       "standard": {
         "attachments": []
       }
     }
   }
   ```

3. **Validate it**:
   ```bash
   bunx @durkinza/challenge-schema validate challenge.json
   ```

4. **Bundle it**:
   ```bash
   zip my-challenge.zip challenge.json
   ```

For more detailed instructions, see the [Getting Started](getting-started.md) guide.

## Use Cases

### Challenge Designers
- Create portable, self-contained challenge bundles
- Define how challenges should be built and deployed
- Support both static and dynamic flag generation
- Provide hints and solutions for players

### Event Coordinators
- Import standardized challenge bundles from various sources
- Create challenge packs with prerequisites and progression
- Validate challenges before deployment
- Customize point values and categories for your event

### Platform Developers (Challenge Forges)
- Parse and validate challenge bundles automatically
- Support standardized deployment configurations
- Generate unique flags per team/player
- Build challenge files dynamically

## Getting Help

- **Documentation**: Browse the sections above
- **Examples**: Check out [real-world examples](examples/index.md)
- **FAQ**: Common questions answered in the [FAQ](FAQ.md)
- **Issues**: Report problems on [GitHub](https://github.com/durkinza/challenge-schema/issues)