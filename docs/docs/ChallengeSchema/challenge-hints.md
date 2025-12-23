# Challenge Hints

As a challenge designer, the challenge hints system allows you to provide progressive assistance to participants who are stuck on your challenge. Hints can have costs (in points) and can be configured with requirements to ensure they are revealed in a specific order.

## Basic Structure

```json
{
  "name": "Challenge Name",
  "hints": [
    {
      "id": 1,
      "title": "First Hint",
      "hint": "Hint content goes here.",
      "cost": 10
    },
    {
      "id": 2,
      "title": "More information",
      "hint": "An additional hint for the player.",
      "cost": 10,
      "requirements": [1]
    }
  ]
  ...
}
```

## Hints Array

The `hints` field is an optional array of hint objects that can be provided to participants during the challenge.

### Hint Object Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id`  | number | Yes | The unique id of the hint, used to link required hints in order. |
| `title` | string | Yes | The title of the hint, displayed to participants before they use it |
| `hint` | string | Yes | The content of the hint provided to participants |
| `cost` | number | No | The cost of the hint in points (deducted from participant's score) |
| `requirements` | number[] | No | List of hint ids that must be used before this hint can be used |

## Examples

### Simple Hint

A basic hint without cost or requirements:

```json
{
  "name": "Web Challenge",
  "hints": [
    {
      "id": 1,
      "title": "Check the source",
      "hint": "Have you looked at the HTML source code?"
    }
  ]
}
```

### Hint with Cost

A hint that costs points when revealed:

```json
{
  "name": "Crypto Challenge",
  "hints": [
    {
      "title": "Cipher Type",
      "hint": "This is a substitution cipher.",
      "cost": 50
    }
  ]
}
```

### Progressive Hints

Multiple hints with requirements to ensure they are revealed in order:

```json
{
  "name": "Binary Exploitation",
  "hints": [
    {
      "id": 1,
      "title": "Buffer Overflow",
      "hint": "Look for buffer overflow vulnerabilities in the input handling.",
      "cost": 25
    },
    {
      "id": 2,
      "title": "Return Address",
      "hint": "Try overwriting the return address on the stack.",
      "cost": 50,
      "requirements": [1]
    },
    {
      "id": 3,
      "title": "Shell Code",
      "hint": "You'll need to inject shellcode to get a shell.",
      "cost": 75,
      "requirements": [1, 2]
    }
  ]
}
```