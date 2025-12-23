# Challenge Schema

The Challenge Schema defines the structure of individual challenges.

## Basic Structure

```json
{
    "$schema": "https://raw.githubusercontent.com/durkinza/challenge-bundle-schema/main/challenge.schema.json",
    "name": "Challenge Name",
    "description": "Challenge description",
    "difficulty": "medium",
    "category": "web",
    "deployment": {
        "type": "standard",
        "standard": {
            "attachments": [
                {
                    "name": "here_is_your_flag",
                    "type": "text/plain",
                    "content": "Hello World, your flag is flag{flag}",
                },
            ]
        }
    },
    "customFlag":{
        "allowedCharacters": {
            "lowercase": true,
            "uppercase": true,
            "number": true,
            "specialCharacters": true,
        }
    },
    "hints": [
    {
        "id": 1,
        "title": "First Hint",
        "hint": "This is your first hint!"
    }
    ],
    "solutions": [
        "Here's how to solve this challenge..."
    ],
    "author": {
        "name": "Author Name",
        "email": "author.email@example.com"
    },
}
```

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | The name of the challenge |
| `description` | string | A detailed description of the challenge |
| `difficulty` | string | The difficulty level of the challenge (easy, medium, hard) |
| `category` | string | The category of the challenge (web, crypto, forensics, etc.) |
| `author` | object | Information about the challenge author |
| `flag` | object | Configuration for the challenge flag |

## Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `tags` | array | Additional tags for categorizing the challenge |
| `points` | number | The point value of the challenge |
| `timeLimit` | number | Time limit for the challenge in minutes |
| `deployment` | object | Configuration for deploying the challenge |
| `attachments` | array | Files to be provided to the participants |
| `solutions` | array | Solution guides for the challenge |


