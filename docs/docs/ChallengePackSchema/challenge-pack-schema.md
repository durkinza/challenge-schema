# Challenge Pack Schema

The Challenge Pack Schema defines a collection of related challenges. It allows you to group multiple challenge bundles together, specify their relationships, and override individual challenge properties.

## Basic Structure

```json title="challenge-pack.json"
{
  "$schema": "https://raw.githubusercontent.com/durkinza/challenge-bundle-schema/main/challenge-pack.schema.json",
  "challenges": [
    {
      "id": "intro-challenge",
      "path": "./challenges/intro",
      "category": "web",
      "points": 100
    },
    {
      "id": "advanced-challenge",
      "path": "./challenges/advanced",
      "category": "web",
      "points": 250,
      "prerequisites": ["intro-challenge"]
    }
  ]
}
```

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `challenges` | array | Array of challenge objects defining the challenges in this pack |

## Challenge Object Fields

Each challenge in the `challenges` array must have:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for this challenge within the pack |
| `path` | string | Yes | Path to the directory containing the challenge bundle (relative to the challenge-pack.json file) |
| `category` | string | No | Override the category from the challenge.json. If not provided, uses the challenge's default category |
| `points` | number | No | Override the point value from the challenge.json. If not provided, uses the challenge's default points |
| `prerequisites` | string[] | No | Array of challenge IDs that must be solved before this challenge becomes available |


## Pack Structure

A challenge pack bundle is a `.zip` file containing:

```
my-challenge-pack.zip
├── challenge-pack.json
├── web-basics.zip
│   ├── challenge.json
│   └── src/
├── crypto-intro.zip
│   ├── challenge.json
│   └── build.sh
└── forensics-101.zip
    ├── challenge.json
    └── evidence.pcap
```

## Path Resolution

Paths in the `path` field are resolved relative to the location of `challenge-pack.json`:

```json title="challenge-pack.json"
{
  "challenges": [
    {
      "id": "challenge1",
      "path": "./web-basics.zip"    // (1)!
    },
    {
      "id": "challenge2",
      "path": "./crypto-intro.zip"  // (2)!
    },
    {
      "id": "challenge3",
      "path": "./forensics-101.zip"  // (3)!
    }
  ]
}
```

1. Challenge 1 path resolves to `./web-basics.zip/challenge.json`
2. Challenge 2 path resolves to `./crypto-intro.zip/challenge.json`
3. Challenge 3 path resolves to `./forensics-101.zip/challenge.json`

## Prerequisites System

The `prerequisites` field creates dependencies between challenges:

```json title="challenge-pack.json"
{
  "challenges": [
    {// (1)!
      "id": "challenge1",
      "path": "./web-basics.zip"
    },
    {
      "id": "challenge2",
      "path": "./crypto-intro.zip",
      "prerequisites": ["challenge1"]  // (2)!
    },
    {
      "id": "challenge3",
      "path": "./forensics-101.zip",
      "prerequisites": ["challenge1", "challenge2"]  // (3)!
    }
  ]
}
```

1. Challenge 1 is available immediately.
2. Challenge 2 unlocks after completing Challenge 1.
3. Challenge 3 unlocks after completing both Challenge 1 and Challenge 2.

### How Prerequisites Work

1. Challenges without prerequisites are available immediately
2. Challenges with prerequisites are locked until all prerequisite challenges are solved
3. Prerequisites reference challenge `id` values, not paths
4. Multiple prerequisites create an AND relationship (all must be completed)
5. Circular dependencies are not allowed

Prerequisites must be supported by the CTF platform deploying the challenge pack to enforce these relationships.

## Overriding Challenge Properties

You can override specific properties from individual `challenge.json` files:

### Category Override

The pack's category takes precedence:


```json title="challenges/web-app/challenge.json"
{
  "name": "Cookie Monster",
  "category": "web",  // (1)!
  "points": 100
}
```

1. The original default category in challenge.json is "web".

```json title="challenge-pack.json"
{
  "challenges": [
    {
      "id": "cookie-monster",
      "path": "./challenges/web-app",
      "category": "input-validation" // (1)!
    }
  ]
}
```

1.  Adding a category field here overrides the original category in challenge.json.

### Points Override

Useful for adjusting difficulty in the context of the pack:

**challenge-pack.json:**
```json
{
  "challenges": [
    {
      "id": "easy-crypto",
      "path": "./crypto/caesar",
      "points": 50  // (1)!
    },
    {
      "id": "hard-crypto",
      "path": "./crypto/rsa",
      "points": 500  // (2)!
    }
  ]
}
```

1. Easier challenge gets fewer points
2. Harder challenge gets more points