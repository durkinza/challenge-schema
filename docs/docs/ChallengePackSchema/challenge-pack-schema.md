# Challenge Pack Schema

The Challenge Pack Schema defines a collection of related challenges.

## Basic Structure

```json
{
  "$schema": "https://raw.githubusercontent.com/durkinza/challenge-bundle-schema/main/challenge-pack.schema.json",
  "name": "Challenge Pack Name",
  "description": "A collection of related challenges",
  "author": {
    "name": "Author Name",
    "email": "author.email@example.com"
  },
  "challenges": [
    "challenge1/challenge.json",
    "challenge2/challenge.json"
  ]
}
```

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | The name of the challenge pack |
| `description` | string | A detailed description of the challenge pack |
| `author` | object | Information about the pack author |
| `challenges` | array | List of paths to challenge definitions |

## Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `tags` | array | Additional tags for categorizing the challenge pack |
| `version` | string | Version of the challenge pack |
| `license` | string | License information for the challenge pack |
| `dependencies` | object | External dependencies required for the challenges |
| `configuration` | object | Pack-wide configuration options |

## Challenge References

The `challenges` field contains a list of paths to challenge definition files. These paths are relative to the location of the challenge pack definition file.

```json
"challenges": [
  "web/sql-injection/challenge.json",
  "crypto/caesar-cipher/challenge.json",
  "forensics/hidden-data/challenge.json"
]
```

## Pack Configuration

The `configuration` field can provide pack-wide settings that apply to all challenges:

```json
"configuration": {
  "timeLimit": 120,
  "maxAttempts": 5,
  "deployment": {
    "namespace": "my-challenge-pack",
    "cleanup": true
  }
}
```

## Dependencies

The `dependencies` field can specify external dependencies required for the challenges:

```json
"dependencies": {
  "docker": ">=20.0.0",
  "kubernetes": ">=1.20.0"
}
```