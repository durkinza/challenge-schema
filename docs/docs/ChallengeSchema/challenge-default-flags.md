# Challenge Default Flags

As a Challenge Designer, the default flag configuration allows you to define the expected solution flags for your challenge.

You can specify flags either as exact static strings or as regex patterns for more flexible matching.

At least one of `static` or `regex` must be provided with non-empty values.

The default flag is used for challenges that do not support dynamic flags, and for instances where a dynamic flag is not provided.

## Basic Structure

```json
{
  "name": "Challenge Name",
  "defaultFlag": {
    "static": ["flag1", "flag2"],
    "regex": ["flag/d", "(flag)?{?flag/d}?"]
  }
  //...
}
```

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `static` | string[] | false* | List of possible static flags for the challenge. Each flag must be a non-empty string. |
| `regex` | string[] | false* | List of possible regex patterns for validating flags. Each pattern must be a non-empty string. |

\* At least one of `static` or `regex` must be provided and non-empty.

## Static Flags

Static flags are exact string matches. Use this when your challenge has a fixed, known solution.

### Single Static Flag

```json
{
  "defaultFlag": {
    "static": ["CTF{welcome_to_the_challenge}"]
  }
}
```

### Multiple Static Flags

Useful when a challenge has multiple valid solutions:

```json
{
  "defaultFlag": {
    "static": [
      "CTF{solution1}",
      "solution1",
      "CTF{alternative_answer}"
    ]
  }
}
```

## Regex Flags

Regex patterns allow for flexible flag validation. Use this when:
- The flag format follows a pattern but the exact value varies
- Multiple correct answers follow a specific format
- Case-insensitive matching is needed

### Basic Regex Pattern

```json
{
  "defaultFlag": {
    "regex": ["^(CTF{)?He[il1]{2}o[_-]W[o0]rld}?$"]
  }
}
```

## Combining Static and Regex

You can use both static and regex flags together. A submission is valid if it matches any of the static flags OR any of the regex patterns:

```json
{
  "defaultFlag": {
    "static": ["CTF{admin}"],
    "regex": ["^((CTF|flag){)?admin}?$"]
  }
}
```
