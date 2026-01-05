# Challenge Flags

As a Challenge Designer, the challenge flag generation allows you to define what flags your challenge supports.

For example, a rot13 cipher may not support special characters.
If your challenge does not support dynamic flags, this field not required.

## Basic Structure

=== "object generic specialCharacters"

    | Field | Type | required | Default | Description |
    |-------|------|----------|---------|-------------|
    | `lowercase` | boolean | false | true | Include lowercase letters [a-z] (default: true) |
    | `uppercase` | boolean | false | true | Include uppercase letters [A-Z] (default: true) |
    | `numbers` | boolean | false | true | Include numbers [0-9] (default: true) |
    | `specialCharacters` | boolean | false | true | Include special characters.

    ```json title="Challenge Schema"
    {
      "name": "Challenge Name",
      "customFlag": {
        "allowedCharacters":{
            "lowercase": true,
            "uppercase": true,
            "numbers": true,
            "specialCharacters": true // (1)!
        },
        "length": {
            "min": 0,
            "max": 100
        }
      }
      //...
    }
    ```

    1. Default character set assumes any ascii character.
=== "object with string specialCharacters"

    | Field | Type | required | Default | Description |
    |-------|------|----------|---------|-------------|
    | `lowercase` | boolean | false | true | Include lowercase letters [a-z] (default: true) |
    | `uppercase` | boolean | false | true | Include uppercase letters [A-Z] (default: true) |
    | `numbers` | boolean | false | true | Include numbers [0-9] (default: true) |
    | `specialCharacters` | string | false | Empty Set | List of special characters that can be used in the flag.

    ```json title="Challenge Schema"
    {
      "name": "Challenge Name",
      "customFlag": {
        "allowedCharacters":{
            "lowercase": true,
            "uppercase": true,
            "numbers": true,
            "specialCharacters": "!@#$%^&*()✅"
        },
        "length": {
            "min": 0,
            "max": 100
        }
      }
      //...
    }
    ```
=== "Characters as a string"

    | Field | Type | required | Default | Description |
    |-------|------|----------|---------|-------------|
    | `allowedCharacters` | string | true | N/A | Exact string of allowed characters for the flag |

    ```json title="Challenge Schema"
    {
      "name": "Challenge Name",
      "customFlag": {
        "allowedCharacters": "1234567890ABCDEF",
        "length": {
            "min": 0,
            "max": 100
        }
      }
      //...
    }
    ```

## Allowed Characters

You can specify allowed characters in two ways:

### 1. Explicit Character Set (String)

Provide an exact string of allowed characters:

```json
{
  "customFlag": {
    "allowedCharacters": "01" //binary
  }
}
```

```json
{
  "customFlag": {
    "allowedCharacters": "0123456789abcdef" // Hexadecimal
  }
}
```

```json
{
  "customFlag": {
    "allowedCharacters": "ACGT" // DNA sequences
  }
}
```

```json
{
  "customFlag": {
    "allowedCharacters": "abc123!@#" // Custom Set
  }
}
```

### 2. Character Categories (Object)

Build a character set from predefined categories:

```json
{
  "customFlag": {
    "allowedCharacters": {
      "lowercase": true,
      "uppercase": true,
      "numbers": true,
      "specialCharacters": true
    }
  }
}
```

## Generation Fields

| Field | Type | required | default | Description |
|-------|------|----------|---------|-------------|
| `allowedCharacters` | object/string | false | N/A | Either an explicit character set string or an object with character categories. Only required if dynamic flags are supported. |
| `lowercase` | boolean | false | true | Include lowercase letters [a-z] (default: true) |
| `uppercase` | boolean | false | true | Include uppercase letters [A-Z] (default: true) |
| `numbers` | boolean | false | true | Include numbers [0-9] (default: true) |
| `specialCharacters` | boolean/string | false | false |  Include special characters. `true` = default set [_=!#$%&()*+,-.:'/?@ ], `false` = none, or provide custom string (e.g., '!@#$' or emojis '😀😁😂') (default: true) |
| `length.min` | number | false | 1 | The minimum length supported for the flag (default: 1) |
| `length.max` | number | false | MAX_SAFE_INTEGER | The maximum length supported for the flag (default: MAX_SAFE_INTEGER) |

## Examples

**Binary challenge (only 0 and 1):**
```json
{
  "customFlag": {
    "allowedCharacters": "01",
    "length": {
      "min": 8,
      "max": 16
    }
  }
}
```

**Alphanumeric only (no special characters):**
```json
{
  "customFlag": {
    "allowedCharacters": {
      "lowercase": true,
      "uppercase": true,
      "numbers": true,
      "specialCharacters": false
    }
  }
}
```

**With specific special characters:**
```json
{
  "customFlag": {
    "allowedCharacters": {
      "lowercase": true,
      "uppercase": true,
      "numbers": true,
      "specialCharacters": "!@#$%"
    }
  }
}
```

**With emojis:**
```json
{
  "customFlag": {
    "allowedCharacters": {
      "lowercase": true,
      "uppercase": false,
      "numbers": true,
      "specialCharacters": "😀😁😂🎉"
    }
  }
}
```
