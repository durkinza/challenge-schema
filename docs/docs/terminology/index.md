# Terminology

This page is just for adding some clarification on specific terms used in this documentations.

## Challenge Bundle

A Challenge Bundle is a single CTF challenge bundled up and ready for distrobution. 
Typcially this consists of at least a challenge.json file and any supporting files for your challenge.


## Challenge Schema

The Challenge Schema defines the structure of an individual challenge. It includes fields for defining:

- Basic challenge information (name, description, difficulty)
- Author information
- Flag configuration
- Deployment options
- Solution hints and examples

[View Challenge Schema Documentation](../ChallengeSchema/index.md)

## Challenge Pack Schema

The Challenge Pack Schema defines a collection of related challenges. It includes fields for defining:

- Pack metadata (name, description)
- Author information
- List of included challenges
- Pack-level configuration options

[View Challenge Pack Schema Documentation](../ChallengePackSchema/index.md)


## Challenge Forge

Challenge Forges are services that accept the challenge pack and bundles and handle the deployment of these challenges for the event coordinators.
Often these are either plugins for a CTF platform, or the CTF platform itself it accepts the bundles directly.

## Positions

# Challenge Designer
The challenge designer is the person that develops the challenge and builds the challenge.json filed to bundle the challenge.

# Challenge Publisher
The challenge publisher is the person that publishes the challenge bundle for event coordinators to use. This is often the same person as the challenge designer.

# Event Coordinator
The Event Coordinator is the person(s) that setup a CTF event and handles the import and deployment of challenges.
Event Coordinators will be dependent on the Challenge Designer and Challenge Publisher to fix issues in the challenge. 

# Player
The Player is the participant of a CTF event that is attempting to solve the challenge. The Player will often work closely with the Event Coordinator to work through the challenge.