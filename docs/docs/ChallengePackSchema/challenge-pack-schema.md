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
| `challenges` | array | List of paths to challenge definitions |

## Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `description` | string | A detailed description of the challenge pack |
| `author` | object | Information about the pack author |

## Challenge References

The `challenges` field contains a list of paths to challenge definition files. These paths are relative to the location of the challenge pack definition file.

```json
{
    "challenges": [
        "web/sql-injection/challenge.json",
        "crypto/caesar-cipher/challenge.json",
        "forensics/hidden-data/challenge.json"
    ]
}
```
